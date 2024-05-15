import axios from "axios";
import { io } from "socket.io-client";

export interface LoginChallenge {
  loginChallenge: string; // The raw challenge JWT value
  loginChallengeUrl: string; // The challenge embedded in a URL that the client can display in a QR code
  loginChallengeShortUrl?: string; // [EXPERIMENTAL, UNSTABLE] A shortlink version of the challenge URL
}

/**
 * Custom exception class for HeirloomSdk related errors.
 */
export class HeirloomSdkException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "HeirloomSdkException";
  }
}


/**
 * Internal function to fetch the challenge using the provided API key.
 * @param {string} apiKey - The API key used for the request.
 * @returns {Promise<LoginChallenge>} The challenge data or null if an error occurs.
 */
const fetchChallenge = async (apiKey: string): Promise<LoginChallenge | null> => {
  const url = 'https://api.heirloom.io/auth/sessions/challenges';
  try {
    const response = await axios.post<LoginChallenge>(url, {}, {
      headers: {
        'X-Heirloom-API-Key': apiKey,
        'X-Heirloom-API-Version': '1',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('[HeirloomSdk]: Error fetching challenge:', error);
    return null;
  }
}

interface DecodedJWT {
  issuer: string;
  audience: string;
  subject: string;
  iat: number;
  exp: number;
}

function decodeJWT(token): DecodedJWT {
  const base64Url = token.split('.')[1]; // Get the payload part
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Convert base64url to base64
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

/**
 * HeirloomSdk class provides methods to interact with the Heirloom API.
 */
export class HeirloomSdk {
  /**
   * Constructs an instance of the HeirloomSdk with the provided API key.
   * @param {string} apiKey - The API key used for authenticating API requests.
   */
  constructor(private apiKey: string) {
  }

  /**
   * Fetches a new login challenge from the Heirloom API.
   * @returns {Promise<LoginChallenge | null>} A promise that resolves to the fetched LoginChallenge or null if an error occurs.
   */
  async challenges() {
    const challengeResult = await fetchChallenge(this.apiKey);
    return challengeResult;
  }

  async quickLogin(
    onQrCodeReady: (url: string, raw: LoginChallenge) => void,
    onLoggedIn: (did: string, data?: DecodedJWT, raw?: { authToken: string }) => void,
    onSocketError: (error: any) => void
  ) {
    try {
      const data = await this.challenges();
      if (!data)
        throw new HeirloomSdkException("No data received from challenges.");
      onQrCodeReady(data.loginChallengeUrl, data);

      const apiKey = this.apiKey;
      const jwtChallenge = data.loginChallenge;
      const apiBaseUrl = 'wss://api.heirloom.io';
      console.log("!jwt", jwtChallenge);
      const socket = io(apiBaseUrl, {
        query: { apiKey, jwtChallenge },
      });

      const topic = `tokens:${apiKey}:${jwtChallenge}`;

      socket.on('connect', () => {
        console.log(socket);
        console.log('Connected to the server');
      });

      socket.on('connect_error', (error) => {
        onSocketError(error);
        console.error('Connection error:', error);
      });

      socket.on('error', (errorMessage) => {
        onSocketError(errorMessage);
        console.error('Error from server:', errorMessage);
      });
      //   {
      //     "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJodHRwczovL2FwaS5oZWlybG9vbS5pby9hdXRoIiwiYXVkaWVuY2UiOiJodHRwczovL2ZvcnR5LXdvcmRzLXRpZS5sb2NhLmx0Iiwic3ViamVjdCI6ImRpZDpoZWlybG9vbS1wb2x5Z29uOjM2NTY1ODU5LUMyQjAtNDgxMC05QkQxLUYzOUVBRDY5MzY0MyIsImlhdCI6MTcxNTY4OTcxNywiZXhwIjoxNzIwODczNzE3fQ.63N_qpL56xHCHnMR7-YcQLBfCTs_Rbt57OSUOy9gfbk"
      // }
      socket.on(topic, (message: Partial<{ authToken: string }>) => {
        console.log('Received message:', message);
        if (!message || !message['authToken']) {
          throw new HeirloomSdkException("Invalid message received, expected authToken");
        } else {
          const decoded: DecodedJWT = decodeJWT(message.authToken);
          onLoggedIn(decoded.subject, decoded, { authToken: message.authToken })
          console.log("!decoded", decoded);
        }

        // Emit acknowledgement of receipt back to the server
        socket.emit(`acknowledgement-${topic}`);
      });

      socket.on('disconnect', () => {
        console.log('Disconnected from the server');
      });
      return socket;
    } catch (error) {
      console.error('[HeirloomSdk]: Error during quick login:', error);
      throw error; // Rethrow or handle as needed
    }
  }
}
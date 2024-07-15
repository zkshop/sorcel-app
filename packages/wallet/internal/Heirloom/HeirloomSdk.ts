import axios from "axios";
import { io, Socket } from "socket.io-client";

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
const fetchChallenge = async (apiKey: string, lockId: string): Promise<LoginChallenge | null> => {
  const url = 'https://api.heirloom.io/auth/sessions/challenges';
  try {
    const response = await axios.get<LoginChallenge>(url, {
      headers: {
        'X-Heirloom-API-Key': apiKey,
        'X-Heirloom-API-Version': '1',
        'X-Heirloom-Lock-ID': lockId,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('[HeirloomSdk]: Error fetching challenge:', error);
    return null;
  }
}

export interface DecodedJWT {
  issuer: string;
  audience: string;
  subject: string;
  iat: number;
  exp: number;
}

function decodeJWT(token: string): DecodedJWT {
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
  async challenges(lockId: string) {
    console.log("!!!api key", this.apiKey);
    const challengeResult = await fetchChallenge(this.apiKey, lockId);
    return challengeResult;
  }

  /**
   * Initiates a quick login process using a WebSocket connection.
   * This method handles the entire flow of fetching a login challenge,
   * displaying a QR code, and managing WebSocket events for login completion or errors.
   * 
   * @param {Function} onQrCodeReady - Callback function to handle the QR code URL and raw challenge data.
   * @param {Function} onLoggedIn - Callback function to handle successful login, providing DID and decoded JWT.
   * @param {Function} onSocketError - Callback function to handle any WebSocket errors.
   * @param {Function} socketInstance - Optional callback to handle the instance of the connected WebSocket.
   * @returns {Promise<Socket>} Returns a promise that resolves to the WebSocket instance used for the connection.
   */
  async quickLogin(
    lockId: string,
    onQrCodeReady: (url: string, raw: LoginChallenge) => void,
    onLoggedIn: (did: string, data?: DecodedJWT, raw?: { authToken: string }) => void,
    onSocketError: (error: any) => void,
    socketInstance?: (instance: Socket) => void
  ) {
    try {
      const data = await this.challenges(lockId);
      if (!data)
        throw new HeirloomSdkException("No data received from challenges.");
      onQrCodeReady(data.loginChallengeUrl, data);

      const apiKey = this.apiKey;
      const jwtChallenge = data.loginChallenge;
      const apiBaseUrl = 'wss://api.heirloom.io';
      const socket = io(apiBaseUrl, {
        query: { apiKey, lockId, jwtChallenge },
      });

      if (socketInstance) {
        socketInstance(socket);
      }

      const topic = `tokens:${apiKey}:${lockId}:${jwtChallenge}`;

      socket.on('connect', () => {
        // Intentional blank
        console.log("!connected")
      });

      socket.on('connect_error', (error) => {
        onSocketError(error);
      });

      socket.on('error', (errorMessage) => {
        onSocketError(errorMessage);
      });
    
      socket.on(topic, (message: Partial<{ authToken: string }>) => {
        if (!message || !message['authToken']) {
          throw new HeirloomSdkException("Invalid message received, expected authToken");
        } else {
          const decoded: DecodedJWT = decodeJWT(message.authToken);
          onLoggedIn(decoded.subject, decoded, { authToken: message.authToken })
        }

        // Emit acknowledgement of receipt back to the server
        socket.emit(`acknowledgement-${topic}`);
      });

      socket.on('disconnect', () => {
        console.log("!disconnected")
      });
      return socket;
    } catch (error) {
      console.error('[HeirloomSdk]: Error during quick login:', error);
      throw error; // Rethrow or handle as needed
    }
  }
}
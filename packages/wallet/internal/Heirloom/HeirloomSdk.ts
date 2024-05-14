import axios from "axios";

export interface LoginChallenge {
  loginChallenge: string; // The raw challenge JWT value
  loginChallengeUrl: string; // The challenge embedded in a URL that the client can display in a QR code
  loginChallengeShortUrl?: string; // [EXPERIMENTAL, UNSTABLE] A shortlink version of the challenge URL
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
}
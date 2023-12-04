export function AuthorizationTokenService(client) {
    return {
        sign: (appId, metadata) => client.sign(appId, metadata),
        verify: (token) => client.verify(token),
        decodeAppId: (token) => client.decodeAppId(token),
        getUserPayload: (token) => client.getUserPayload(token),
    };
}

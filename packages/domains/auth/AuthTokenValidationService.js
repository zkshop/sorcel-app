export function AuthTokenValidationService(client) {
    return {
        validate: (token) => client.validate(token),
    };
}

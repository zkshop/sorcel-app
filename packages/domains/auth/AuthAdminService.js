export const AuthAdminService = (client) => ({
    login: (email) => client.login(email),
});

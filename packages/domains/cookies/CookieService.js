export function CookieService(client) {
    return {
        get: (name) => client.get(name),
        remove: (name) => client.remove(name),
        set: (name, value) => client.set(name, value),
    };
}

import { request } from "./baseHTTP";

/**
 * Recupera la lista utenti con ricerca testuale e paginazione.
 * La ricerca usa il parametro `q` di json-server.
 *
 * @param {object} [options]
 * @param {string} [options.search=""] - Testo di ricerca libero.
 * @param {number} [options.limit=10] - Numero utenti per pagina.
 * @param {number} [options.page=1] - Numero pagina.
 * @returns {Promise<Array<object>>}
 * @example
 * const users = await getUsers({ search: "mario", limit: 20, page: 1 });
 */
export function getUsers({ search = "", limit = 10, page = 1 } = {}) {
    return request("/users", {
        query: {
            q: search,
            _limit: limit,
            _page: page
        }
    });
}

/**
 * Recupera il dettaglio di un singolo utente tramite ID.
 *
 * @param {number|string} userId - ID dell'utente.
 * @returns {Promise<object>}
 * @example
 * const user = await getUserById(3);
 */
export function getUserById(userId) {
    return request(`/users/${userId}`);
}

/**
 * Crea un nuovo utente.
 *
 * @param {object} userPayload - Dati utente da creare.
 * @returns {Promise<object>}
 * @example
 * const newUser = await createUser({
 *   nome: "Laura",
 *   cognome: "Bianchi",
 *   email: "laura.bianchi@example.com",
 *   comune: "Milano",
 *   dataNascita: "1994-02-10",
 *   attivo: true,
 *   avatar: "https://ui-avatars.com/api/?name=Laura+Bianchi"
 * });
 */
export function createUser(userPayload) {
    return request("/users", {
        method: "POST",
        body: userPayload
    });
}

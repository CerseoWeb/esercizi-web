import { request } from "./baseHTTP";

/**
 * Recupera i post piu recenti con paginazione.
 * L'ordinamento e' per data decrescente (`data desc`).
 *
 * @param {object} [options]
 * @param {number} [options.limit=10] - Numero di post per pagina.
 * @param {number} [options.page=1] - Numero pagina.
 * @returns {Promise<Array<object>>}
 * @example
 * const posts = await getRecentPosts({ limit: 5, page: 1 });
 */
export function getRecentPosts({ limit = 10, page = 1 } = {}) {
    return request("/posts", {
        query: {
            _sort: "data",
            _order: "desc",
            _limit: limit,
            _page: page
        }
    });
}

/**
 * Recupera i post di un utente specifico con paginazione.
 * L'ordinamento e' per data decrescente (`data desc`).
 *
 * @param {number|string} userId - ID utente proprietario dei post.
 * @param {object} [options]
 * @param {number} [options.limit=10] - Numero di post per pagina.
 * @param {number} [options.page=1] - Numero pagina.
 * @returns {Promise<Array<object>>}
 * @example
 * const userPosts = await getPostsByUser(1, { limit: 10, page: 2 });
 */
export function getPostsByUser(userId, { limit = 10, page = 1 } = {}) {
    return request("/posts", {
        query: {
            userId,
            _sort: "data",
            _order: "desc",
            _limit: limit,
            _page: page
        }
    });
}

/**
 * Recupera il dettaglio di un singolo post tramite ID.
 *
 * @param {number|string} postId - ID del post.
 * @returns {Promise<object>}
 * @example
 * const post = await getPostById(12);
 */
export function getPostById(postId) {
    return request(`/posts/${postId}`);
}

/**
 * Crea un nuovo post.
 *
 * @param {object} postPayload - Dati del post da creare.
 * @returns {Promise<object>}
 * @example
 * const newPost = await createPost({
 *   userId: 1,
 *   titolo: "Nuovo post",
 *   contenuto: "Contenuto...",
 *   likes: 0,
 *   data: "2026-04-23"
 * });
 */
export function createPost(postPayload) {
    return request("/posts", {
        method: "POST",
        body: postPayload
    });
}

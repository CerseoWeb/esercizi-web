import { request } from "./baseHTTP";

/**
 * Recupera i commenti associati a un post con paginazione.
 * Se la risorsa `/comments` non esiste nel backend, ritorna `[]`.
 *
 * @param {number|string} postId - ID del post.
 * @param {object} [options]
 * @param {number} [options.limit=10] - Numero commenti per pagina.
 * @param {number} [options.page=1] - Numero pagina.
 * @returns {Promise<Array<object>>}
 * @example
 * const comments = await getCommentsByPostId(1, { limit: 10, page: 1 });
 */
export async function getCommentsByPostId(postId, { limit = 10, page = 1 } = {}) {
    try {
        return await request("/comments", {
            query: {
                postId,
                _sort: "id",
                _order: "desc",
                _limit: limit,
                _page: page
            }
        });
    } catch (error) {
        if (error.message.includes("404")) {
            return [];
        }

        throw error;
    }
}

/**
 * Verifica se un post ha almeno un commento.
 *
 * @param {number|string} postId - ID del post.
 * @returns {Promise<boolean>}
 * @example
 * const hasComments = await hasCommentsForPost(1);
 */
export async function hasCommentsForPost(postId) {
    const comments = await getCommentsByPostId(postId, { limit: 1, page: 1 });
    return comments.length > 0;
}

/**
 * Crea un nuovo commento.
 *
 * @param {object} commentPayload - Dati commento da creare.
 * @returns {Promise<object>}
 * @example
 * const newComment = await createComment({
 *   postId: 1,
 *   userId: 2,
 *   contenuto: "Ottimo articolo!"
 * });
 */
export function createComment(commentPayload) {
    return request("/comments", {
        method: "POST",
        body: commentPayload
    });
}

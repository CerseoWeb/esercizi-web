import { Link } from "react-router-dom";

function ForumPostsTable({ posts, hidePostLink = false }) {
    return (
        <div className="table-wrap">
            <table className="forum-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titolo</th>
                        <th>Contenuto</th>
                        <th>Data</th>
                        <th>Likes</th>
                        <th>Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => {
                        const title = post?.titolo ?? post?.title ?? "Post senza titolo";
                        const content = post?.contenuto ?? post?.content ?? "Contenuto non disponibile.";
                        const dateText = post?.data ?? post?.date ?? "Data non indicata";

                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{title}</td>
                                <td>{content}</td>
                                <td>{dateText}</td>
                                <td>{typeof post?.likes !== "undefined" ? post.likes : "-"}</td>
                                <td className="forum-actions-cell">
                                    {!hidePostLink && (
                                        <Link to={`/forum/post/${post.id}`} className="inline-link">
                                            Apri post
                                        </Link>
                                    )}
                                    {post?.userId && (
                                        <Link to={`/forum/user/${post.userId}`} className="inline-link">
                                            Utente
                                        </Link>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ForumPostsTable;

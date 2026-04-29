import { Link } from "react-router-dom";

function ForumPostsTable({ posts, hideActions = false }) {
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
                    {posts.map(({ id, titolo, contenuto, data, likes, userId }) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{titolo}</td>
                                <td>{contenuto}</td>
                                <td>{data}</td>
                                <td>{likes}</td>
                                <td className="forum-actions-cell">
                                    <Link to={`/forum/post/${id}`} className="inline-link">Apri post</Link>
                                    <Link to={`/forum/user/${userId}`} className="inline-link">Utente</Link>
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

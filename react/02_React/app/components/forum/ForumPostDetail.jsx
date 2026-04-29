import { Link } from "react-router-dom";

function ForumPostDetail({ post: { titolo, contenuto, data, likes, userId } }) {
    return (
        <article className="forum-post-card">
            <h3>{titolo}</h3>
            <p className="forum-post-content">{contenuto}</p>

            <div className="forum-post-meta">
                <span>Pubblicato: {data}</span>
                <span>Likes: {likes}</span>
                <Link to={`/forum/user/${userId}`} className="inline-link">Vedi autore</Link>
            </div>
        </article>
    );
}

export default ForumPostDetail;

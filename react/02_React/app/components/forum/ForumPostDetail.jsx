import { Link } from "react-router-dom";

function ForumPostDetail({ post }) {
    const title = post?.titolo ?? post?.title ?? "Post senza titolo";
    const content = post?.contenuto ?? post?.content ?? "Contenuto non disponibile.";
    const dateText = post?.data ?? post?.date ?? "Data non indicata";

    return (
        <article className="forum-post-card">
            <h3>{title}</h3>
            <p className="forum-post-content">{content}</p>

            <div className="forum-post-meta">
                <span>Pubblicato: {dateText}</span>
                {typeof post?.likes !== "undefined" && <span>Likes: {post.likes}</span>}
                {post?.userId && (
                    <Link to={`/forum/user/${post.userId}`} className="inline-link">
                        Vedi autore
                    </Link>
                )}
            </div>
        </article>
    );
}

export default ForumPostDetail;

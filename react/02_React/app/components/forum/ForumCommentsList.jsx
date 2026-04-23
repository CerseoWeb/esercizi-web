function ForumCommentsList({ comments }) {
    return (
        <section className="forum-section">
            <h3>Commenti</h3>

            {comments.length === 0 ? (<p>Nessun commento per questo post.</p>) : (
                <div className="forum-comments-list">
                    {comments.map(({ id, contenuto, userId, postId }) => {
                        return (
                            <article key={id} className="forum-comment-card">
                                <p>{contenuto}</p>
                                <span>{userId}</span>
                            </article>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default ForumCommentsList;

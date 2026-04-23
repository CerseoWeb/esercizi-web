function ForumCommentsList({ comments }) {
    return (
        <section className="forum-section">
            <h3>Commenti</h3>

            {comments.length === 0 ? (<p>Nessun commento per questo post.</p>) : (
                <div className="forum-comments-list">
                    {comments.map((comment) => {
                        const content = comment?.contenuto ?? comment?.content ?? "Commento senza contenuto.";

                        return (
                            <article key={comment.id} className="forum-comment-card">
                                <p>{content}</p>
                                <span>
                                    Commento #{comment.id}
                                    {comment?.userId ? ` - utente ${comment.userId}` : ""}
                                </span>
                            </article>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default ForumCommentsList;

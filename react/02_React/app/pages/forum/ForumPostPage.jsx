import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ForumCommentsList from "../../components/forum/ForumCommentsList";
import ForumPostDetail from "../../components/forum/ForumPostDetail";
import ForumStateBlock from "../../components/forum/ForumStateBlock";
import { getCommentsByPostId } from "../../scripts/api/comments";
import { getPostById } from "../../scripts/api/posts";

function ForumPostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadPostAndComments() {
            setLoading(true);
            setError("");

            try {
                const postData = await getPostById(id);
                setPost(postData ?? null);

                const commentsData = await getCommentsByPostId(id, { limit: 100, page: 1 });
                setComments(Array.isArray(commentsData) ? commentsData : []);
            } catch {
                setError("Post non trovato o commenti non disponibili.");
            } finally {
                setLoading(false);
            }
        }

        loadPostAndComments();
    }, [id]);

    return (
        <section className="page-view forum-view">
            <ForumStateBlock
                loading={loading}
                error={error}
                empty={!loading && !error && !post}
                emptyMessage="Post non trovato."
            />

            {!loading && !error && post && (
                <>
                    <div className="forum-post-detail">
                        <ForumPostDetail post={post} />
                    </div>

                    <ForumCommentsList comments={comments} />
                </>
            )}
        </section>
    );
}

export default ForumPostPage;

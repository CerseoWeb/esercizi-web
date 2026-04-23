import { useEffect, useState } from "react";
import ForumPostsTable from "../../components/forum/ForumPostsTable";
import ForumStateBlock from "../../components/forum/ForumStateBlock";
import { getRecentPosts } from "../../scripts/api/posts";

function ForumPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadPosts() {
            setLoading(true);
            setError("");

            try {
                const recentPosts = await getRecentPosts({ limit: 12, page: 1 });
                setPosts(Array.isArray(recentPosts) ? recentPosts : []);
            } catch {
                setError("Impossibile caricare i post del forum.");
            } finally {
                setLoading(false);
            }
        }

        loadPosts();
    }, []);

    return (
        <section className="page-view forum-view">
            <h2>Forum</h2>
            <p className="page-lead">I post piu recenti pubblicati nel forum.</p>

            <ForumStateBlock
                loading={loading}
                error={error}
                empty={!loading && !error && posts.length === 0}
                emptyMessage="Nessun post disponibile al momento."
            />

            {!loading && !error && posts.length > 0 && <ForumPostsTable posts={posts} />}
        </section>
    );
}

export default ForumPage;

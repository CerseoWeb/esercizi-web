import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ForumPostsTable from "../../components/forum/ForumPostsTable";
import ForumStateBlock from "../../components/forum/ForumStateBlock";
import UserProfileCard from "../../components/forum/UserProfileCard";
import { getPostsByUser } from "../../scripts/api/posts";
import { getUserById } from "../../scripts/api/users";

function ForumUserPage() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadUserAndPosts() {
            setLoading(true);
            setError("");

            try {
                const userData = await getUserById(id);
                setUser(userData ?? null);

                const userPosts = await getPostsByUser(id, { limit: 5, page: 1 });
                setPosts(Array.isArray(userPosts) ? userPosts : []);
            } catch {
                setError("Utente non trovato o dati non disponibili.");
            } finally {
                setLoading(false);
            }
        }

        loadUserAndPosts();
    }, [id]);

    return (
        <section className="page-view forum-view">
            <ForumStateBlock
                loading={loading}
                error={error}
                empty={!loading && !error && !user}
                emptyMessage="Utente non trovato."
            />

            {!loading && !error && user && (
                <div>
                    <UserProfileCard user={user} />

                    <section className="forum-section">
                        <h3>Post Recenti</h3>
                        {posts.length === 0 ? (
                            <p>Questo utente non ha ancora pubblicato post.</p>
                        ) : (
                            <ForumPostsTable posts={posts} />
                        )}
                    </section>
                </div>
            )}
        </section>
    );
}

export default ForumUserPage;

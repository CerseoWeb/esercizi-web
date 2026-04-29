function ForumStateBlock({ loading, error, empty, emptyMessage }) {
    if (loading) {
        return <p className="forum-state">Caricamento in corso...</p>;
    }

    if (error) {
        return <p className="forum-state forum-state-error">{error}</p>;
    }

    if (empty) {
        return <p className="forum-state">{emptyMessage}</p>;
    }

    return null;
}

export default ForumStateBlock;

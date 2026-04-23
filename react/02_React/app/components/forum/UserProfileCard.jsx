function UserProfileCard({ user }) {
    const firstName = user?.nome ?? user?.name ?? "Nome";
    const lastName = user?.cognome ?? "";
    const fullName = `${firstName} ${lastName}`.trim() || "Utente";
    const avatar = user?.avatar ?? `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=0D8ABC&color=fff`;

    return (
        <section className="forum-profile-card">
            <img src={avatar} alt={`Avatar di ${fullName}`} className="forum-profile-avatar" />

            <div className="forum-profile-body">
                <h3>{fullName}</h3>
                <p>{user?.email ?? "Email non disponibile"}</p>

                <div className="forum-profile-meta">
                    <span>Comune: {user?.comune ?? "-"}</span>
                    <span>Data nascita: {user?.dataNascita ?? "-"}</span>
                    <span>
                        Stato: {typeof user?.attivo !== "undefined" ? (user.attivo ? "Attivo" : "Non attivo") : "-"}
                    </span>
                </div>
            </div>
        </section>
    );
}

export default UserProfileCard;

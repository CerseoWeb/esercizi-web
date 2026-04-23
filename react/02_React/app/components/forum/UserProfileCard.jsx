import Pill from "../Pill";

function UserProfileCard({ user: { nome, cognome, email, avatar, comune, dataNascita, attivo } }) {

    const fullName = `${nome} ${cognome}`.trim() || "Utente";
    return (
        <section className="forum-profile-card">
            <img src={avatar} alt={`Avatar di ${fullName}`} className="forum-profile-avatar" />

            <div className="forum-profile-body">
                <h3>{fullName}</h3>
                <p>{email}</p>

                <div className="forum-profile-meta">
                    <span>Comune: {comune || "-"}</span>
                    <span>Data nascita: {dataNascita || "-"}</span>

                    <Pill label={attivo ? "Attivo" : "Non attivo"} tone={attivo ? "default" : "warm"} />
                </div>
            </div>
        </section>
    );
}

export default UserProfileCard;

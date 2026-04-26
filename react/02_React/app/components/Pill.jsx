function Pill({ label, tone = "default" }) {
    let className = "pill";

    if (tone === "warm") {
        className += " warm";
    } else if (tone === "soft") {
        className += " soft";
    }

    return <span className={className}>{label}</span>;
}

export default Pill;

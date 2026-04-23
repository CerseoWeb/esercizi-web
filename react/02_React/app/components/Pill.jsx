function Pill({ label, tone = "default" }) {
    const className = tone === "warm" ? "pill warm" : tone === "soft" ? "pill soft" : "pill";

    return <span className={className}>{label}</span>;
}

export default Pill;

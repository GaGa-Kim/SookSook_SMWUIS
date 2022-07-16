import "./login.css";
const Header = ({ text }) => {
    return (
        <section className="header">
            <div
                style={{
                    borderBottom: "thin solid #aaa",
                    lineHeight: "0.1em",
                    margin: "10px 0 20px"
                }}
            >
                <span style={{ background: "#fff", padding: "0 10px" }}>{text}</span>
            </div>
        </section>
    );
};

export default Header; 
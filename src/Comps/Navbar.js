import "../index.css";

const Navbar = props => {
    return (
        <nav>
            <h1>Testing</h1>
            <div className="nav-links-container">
                <a href="/">Home</a>
                <a href="/help">Help</a>
                <a href="/help">Sign In</a>
            </div>
        </nav>
    );
};

export default Navbar;

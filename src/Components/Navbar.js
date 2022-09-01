export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">SITE NAME</a>
        <ul>
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/create item">Create item</a>
            </li>
        </ul>
    </nav>
}
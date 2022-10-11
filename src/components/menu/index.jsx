import './index.scss'

export default function Menu() {

    return (
        <nav className="nav-bar">
            <div className="nav-logo_container">
                <a href="">
                    <img src="src/assets/logo.svg" alt="logo" />
                </a>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Work</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
import './index.scss'

export default function Menu() {

    return (
        <nav className="nav-bar">
            <div className="nav-logo_container">
                <a href="#home">
                    {/* <img src="src/assets/logo.svg" alt="logo" /> */}
                </a>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
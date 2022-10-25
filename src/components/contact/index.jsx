import "./index.scss";
import { FaEnvelope } from "react-icons/fa";


export default function Contact (){
    return(
        <div id="contact">
            <div className="contact-section">
                <div className="text-container">
                    <h2>Ready To Take The Next Step Forward?</h2>
                    <p>Get In Contact And Start Creating Your Future Website Today</p>
                </div>
                <div className="link-container">
                    <div className="link-icon">
                        <a className="link"
                        href="https://www.linkedin.com/in/carlosregaladodev/"
                        target="_blank">
                            <i className="devicon-linkedin-plain"></i>
                        </a>
                        <a className="link"
                        href="https://github.com/CarlosDRA" 
                        target="_blank">
                            <i className="devicon-github-original"></i>
                        </a>
                    </div>
                    
                    {/* <FaEnvelope className="link email-link"/> */}
                </div>
            </div>
            <footer>
                <p>Designed & Developed by Carlos Regalado</p>
                <p>© 2022 Carlos Regalado - All Rights Reserved</p>
            </footer>
        </div>
    )
}
import "./index.scss";

export default function Contact (){
    return(
        <section id="contact">
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
                </div>
            </div>

            <div className="background-reference work-reference">
                <a href="https://unsplash.com/photos/RSu-8IxCZ8c?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" target="_blank">Photo</a> by <a href="https://unsplash.com/@moonboyz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Bill Fairs</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
            </div>
            
            <footer>
                <p>Designed & Developed by Carlos Regalado</p>
                <p>© 2022 Carlos Regalado - All Rights Reserved</p>
            </footer>
        </section>
    )
}
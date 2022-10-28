import "./index.scss"

const Home = () => {
    return (
        <section id="home">
            <h1>Carlos Regalado</h1>
            <h2>Web Developer</h2>

            <div className="buttons-container">
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="background-reference">
                <a href="https://unsplash.com/photos/efJTdhsmzPI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" target="_blank">Photo</a> by <a href="https://unsplash.com/@yuhao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Pang Yuhao</a> on <a href="https://unsplash.com/s/photos/city-at-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
            </div>
        </section>
    )
}

export default Home;
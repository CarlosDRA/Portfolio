import "./index.scss";
import Card from "../card/index";

export default function Work (props){

    return(
        <section id="work">
            <h2>Here Are Some Of The Projects I’ve Worked On</h2>
            <div className="carousel">
                <Card 
                    index="0" 
                    status="active"
                    title="Social proof project card"
                    code="https://github.com/CarlosDRA/FrontendMentor-social-proof-section"
                    url="https://sharp-nobel-68b0d6.netlify.app/"
                />
                <Card 
                    index="1" 
                    status="right" 
                    title="Etch-A-Sketch project card"
                    code="https://github.com/CarlosDRA/Etch-a-Sketch"
                    url="https://laughing-pasteur-17ca00.netlify.app/"
                />
                <Card 
                    index="2" 
                    status="hidden"
                    title="Quizzical project card"
                    code="https://github.com/CarlosDRA/Quizzical-app"
                    url="https://heartfelt-paletas-e2242a.netlify.app/"
                />
                <Card 
                    index="3" 
                    status="hidden"
                    title="Book library project card"
                    code="https://github.com/CarlosDRA/library"
                    url="https://cosmic-crepe-23daab.netlify.app/"
                />
                <Card 
                    index="4" 
                    status="hidden"
                    title="Three cards project card"
                    code="https://github.com/CarlosDRA/FrontendMentor-3-column-preview"
                    url="https://eager-beaver-d35aef.netlify.app/"
                />
                <Card 
                    index="5" 
                    status="hidden"
                    title="Stats project card"
                    code="https://github.com/CarlosDRA/FrontendMentor-stats-preview-component"
                    url="https://silly-curie-705f5e.netlify.app/"
                />
                <Card 
                    index="6" 
                    status="hidden"
                    title="Frequently Asked Questions project card"
                    code="https://github.com/CarlosDRA/FrontendMentor-FAQ-accordion"
                    url="https://laughing-galileo-7203a9.netlify.app/"
                />
                <Card 
                    index="7" 
                    status="hidden"
                    title="Article preview project card"
                    code="https://github.com/CarlosDRA/FrontendMentor-article-preview"
                    url="https://agitated-lovelace-cd2d93.netlify.app/"
                />
                <Card 
                    index="8" 
                    status="left"
                    title="Four cards feature section project card"
                    code="https://github.com/CarlosDRA/FrontendMentor-Four-card-feature-section"
                    url="https://clever-chandrasekhar-40fd9b.netlify.app/"
                />

                <button 
                    className="button button-right"
                    onClick={props.handleRightClick}
                ></button>
                <button 
                    className="button button-left"
                    onClick={props.handleLeftClick}
                ></button>
            </div>
            
            <div className="background-reference">
                <a href="https://unsplash.com/photos/QEDXqtje6fw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" target="_blank">Photo</a> by <a href="https://unsplash.com/@samferrara?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Samuel Ferrara</a> on <a href="https://unsplash.com/s/photos/city-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
            </div>
        </section>
    )
}
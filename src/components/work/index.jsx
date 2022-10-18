import "./index.scss";
import Card from "../card/index";

export default function Work (){
    return(
        <div id="work">
            <h2>Here Are Some Of The Projects I’ve Worked On</h2>
            <div className="carousel">
                <Card />
            </div>
        </div>
    )
}
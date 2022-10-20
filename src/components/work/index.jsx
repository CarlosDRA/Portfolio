import "./index.scss";
import Card from "../card/index";

export default function Work (props){

    return(
        <div id="work">
            <h2>Here Are Some Of The Projects I’ve Worked On</h2>
            <div className="carousel">
                <Card className="card card-big middle" index="0" status="active"/>
                <Card className="card card-small left" index="1" status="unknown"/>
                <Card className="card card-small right" index="2" status="unknown"/>

                <button 
                    className="button button-right"
                    onClick={props.handleRightClick}
                ></button>
                <button 
                    className="button button-left"
                    onClick={props.handleLeftClick}
                ></button>
            </div>
        </div>
    )
}
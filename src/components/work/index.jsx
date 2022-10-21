import "./index.scss";
import Card from "../card/index";

export default function Work (props){

    return(
        <div id="work">
            <h2>Here Are Some Of The Projects I’ve Worked On</h2>
            <div className="carousel">
                <Card className="card middle" index="0" status="active"/>
                <Card className="card right"  index="1" status="right"/>
                <Card className="card left"   index="2" status="left"/>

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
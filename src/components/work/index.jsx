import "./index.scss";
import Card from "../card/index";

export default function Work (props){

    return(
        <div id="work">
            <h2>Here Are Some Of The Projects I’ve Worked On</h2>
            <div className="carousel">
                <Card className="card" index="0" status="active"/>
                <Card className="card" index="1" status="right"/>
                <Card className="card" index="2" status="hidden"/>
                <Card className="card" index="3" status="hidden"/>
                <Card className="card" index="4" status="hidden"/>
                <Card className="card" index="5" status="hidden"/>
                <Card className="card" index="6" status="hidden"/>
                <Card className="card" index="7" status="hidden"/>
                <Card className="card" index="8" status="left"/>

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
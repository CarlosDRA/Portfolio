import "./index.scss";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa"
import { useState } from "react";

export default function Card(props){

    const [target, setTarget] = useState();

    const mouseOver = (event) => {
        event.stopPropagation();
        const links = event.target.firstChild;
        setTarget(event.target.firstChild);
        links.classList.remove("hidden");
    }

    const mouseOut = (event) => {
        target.classList.add("hidden");
    }

    return(
        <div 
            className="card" 
            title={props.title}
            role="img" 
            aria-label={props.title}
            data-index={props.index} 
            data-status={props.status}
            onMouseEnter={mouseOver}
            onMouseLeave={mouseOut}
        >
            <div className="links-container hidden">
                <a href={props.url} target="_blank" className="link url-link">
                    <FiExternalLink className="icon"/>
                    <br/>live site
                </a>
                <a href={props.code} target="_blank" className="link code-link">
                    <FaGithub className="icon"/>
                    <br/>code
                </a>
            </div>
        </div>
    )
}
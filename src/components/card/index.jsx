import "./index.scss";

export default function Card(props){
    return(
        <div className={props.className} data-index={props.index} data-status={props.status}>
            <a href={props.url} target="_blank" rel="noopener noreferrer"></a>
            <a href={props.code} target="_blank" rel="noopener noreferrer"></a>
        </div>
    )
}
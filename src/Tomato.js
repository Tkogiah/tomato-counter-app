export default function Tomato(props) {
    
    return (
        <div className="tomato-box">
            {props.counter > 0 ? <h2 className="tomato-day-box">{props.array}</h2>:<h2 className="tomato-day-box">{props.counter}</h2>}
        </div>
    )
}
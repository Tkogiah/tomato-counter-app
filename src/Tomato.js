export default function Tomato(props) {
    return (
        <>
            <h1 className="heading">{props.title}</h1>
            {props.counter > 0 ? <h2 className="tomato">{props.array}</h2>:<h2 className="tomato">{props.counter}</h2>}
        </>
    )
}
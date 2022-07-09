export default function Button(props) {
    return (
        <>
            <div className="button" onClick={props.onClick} >
                {props.buttonType}
            </div>
        </>
    )
}
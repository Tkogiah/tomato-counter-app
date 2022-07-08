import Tomato from "./Tomato"

export default function Week(props) {
    const days = ['M', 'T', 'W', 'Th', 'F', "Sa", 'S']
    return (
        <>
            {days.map(day => (
                <div className="tomato-box" key={day}>
                    <h3>{day}</h3>
                    <Tomato 
                        counter={props.counter}
                        array={props.array}
                    />    
                </div>)
                )    
            }
        </>
    )
}
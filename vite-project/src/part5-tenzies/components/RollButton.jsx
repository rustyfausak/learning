export default function RollButton (props) {
    return (
        <button
            onClick={props.onRoll}
            className="roll-button"
        >
            Roll
        </button>
    )
}

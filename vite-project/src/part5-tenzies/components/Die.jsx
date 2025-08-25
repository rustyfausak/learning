export default function Die (props) {
    let className = "die";
    if (props.isLocked) {
        className += " die-locked";
    }
    return (
        <button
            className={className}
            onClick={props.onClick}
            aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
            aria-pressed={props.isLocked}
        >
            {props.value}
        </button>
    );
}

export default function Die (props) {
    let className = "die";
    if (props.isLocked) {
        className += " die-locked";
    }
    return (
        <button
            className={className}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

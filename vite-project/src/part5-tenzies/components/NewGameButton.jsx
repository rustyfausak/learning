export default function NewGameButton (props) {
    return (
        <button
            onClick={props.onClick}
            className="new-game-button"
            ref={props.ref}
        >
            New Game
        </button>
    )
}

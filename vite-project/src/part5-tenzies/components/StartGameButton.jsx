export default function StartGameButton (props) {
    return (
        <button
            onClick={props.onClick}
            className="start-game-button"
        >
            Start Game
        </button>
    )
}

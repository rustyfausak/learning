import './Game.css';

export default function Game(props) {
    if (props.appState !== 'game') {
        return null;
    }
    return (
        <>
            Game
        </>
    );
}

import './Game.css';
import Board from './Board.jsx';

export default function Game(props) {
    if (props.appState !== 'game') {
        return null;
    }

    function pump() {
        console.log(props.run.randomizer.next());
    }

    return (
        <>
            <div className="game">
                <div className="header">
                    <h1>Level { props.run.level }</h1>
                    <div>
                        <button className="btn" onClick={ props.actionOpenPause }>⚙</button>
                    </div>
                </div>
                <div className="main">
                    <Board
                        run={ props.run }
                    />
                </div>
                <div className="footer">
                    <button className="btn btn-secondary" disabled={ 'disabled' }>Undo</button>
                    <div className="gold text-warning">Gold: { props.run.gold }</div>
                    <button className="btn btn-primary" onClick={ pump }>Pump!</button>
                </div>
            </div>
        </>
    );
}

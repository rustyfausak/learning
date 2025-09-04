import './Game.css';
import Board from './Board.jsx';

export default function Game(props) {
    if (props.appState !== 'game') {
        return null;
    }

    function pump() {
        console.log("Pump!");
    }

    return (
        <>
            <div className="game">
                <div className="header">
                    <h1>Level { props.run.level.name }</h1>
                    <div>
                        <button className="btn" onClick={ props.actionOpenPause }>⚙</button>
                    </div>
                </div>
                <div className="main">
                    <Board
                        run={ props.run }
                        syncRun={ props.syncRun }
                    />
                </div>
                <div className="footer">
                    <div className="d-flex gap-3">
                        <button className="btn btn-outline-warning" disabled={ props.run.canResetLevel() ? '' : 'disabled' } onClick={ () => {
                            props.run.resetLevel();
                            props.syncRun();
                        } }>Reset</button>
                        <button className="btn btn-outline-warning" disabled={ props.run.canUndoAction() ? '' : 'disabled' } onClick={ () => {
                            props.run.undoAction();
                            props.syncRun();
                        } }>↺</button>
                    </div>
                    <div className="d-flex gap-3">
                        <div className="badge text-bg-info">
                            Rotations: { props.run.getNumRotations() } / { props.run.allowedRotations }
                        </div>
                        <div className="badge text-bg-purple">
                            Swaps: { props.run.getNumSwaps() } / { props.run.allowedSwaps }
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={ () => {
                        props.run.pump();
                        props.syncRun();
                    } }>Pump!</button>
                </div>
            </div>
        </>
    );
}

import './Game.css';
import Board from './Board.jsx';
import Popover from './Popover.jsx';

export default function Game(props) {
    if (props.appState !== 'game') {
        return null;
    }

    const scoreSummary = props.run.getScoreSummary();

    return (
        <>
            <div className="game">
                <div className="header">
                    <div className="level-info">
                        <h1>Level { props.run.level.name }</h1>
                        <div>Goal: Connect and score at least <code>{ props.run.getRequiredScore() }</code> points</div>
                    </div>
                    
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
                        <button className={"btn " + (props.run.canUndoAction() ? "btn-outline-warning" : 'btn-outline-secondary')} disabled={ props.run.canUndoAction() ? '' : 'disabled' } onClick={ () => {
                            props.run.undoAction();
                            props.syncRun();
                        } }>Undo</button>
                    </div>
                    <div className="d-flex gap-2 align-items-stretch">
                        <Popover
                            className="score-box points-box"
                            content={
                                <div>
                                    <h5>Points</h5>
                                    <table className="score-table">
                                        <tbody>
                                            <tr>
                                                <th>Coverage</th>
                                                <td>{ scoreSummary.points.coverage }</td>
                                            </tr>
                                            <tr>
                                                <th>Overflows</th>
                                                <td>{ scoreSummary.points.overflows }</td>
                                            </tr>
                                            <tr>
                                                <th>Connections</th>
                                                <td>{ scoreSummary.points.connections }</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            }
                        >
                            {
                                scoreSummary.points.coverage
                                + scoreSummary.points.connections
                                + scoreSummary.points.overflows
                            }
                            <div className="score-box-info">🛈</div>
                        </Popover>
                        <div className="times-box">
                            X
                        </div>
                        <Popover
                            className="score-box mult-box"
                            content={
                                <div>
                                    <h5>Multipliers</h5>
                                    <table className="score-table">
                                        <tbody>
                                            <tr>
                                                <th>Base</th>
                                                <td>{ scoreSummary.mults.base }</td>
                                            </tr>
                                            <tr>
                                                <th>Rotations</th>
                                                <td>{ scoreSummary.mults.rotations }</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            }
                        >
                            {
                                scoreSummary.mults.base
                                + scoreSummary.mults.rotations
                            }
                            <div className="score-box-info">🛈</div>
                        </Popover>
                    </div>
                    <button className={"btn " + (props.run.canPump() ? 'btn-primary' : 'btn-outline-secondary')} disabled={ props.run.canPump() ? '' : 'disabled' } onClick={ () => {
                        props.run.pump();
                        props.syncRun();
                    } }>Pump!</button>
                </div>
            </div>
        </>
    );
}

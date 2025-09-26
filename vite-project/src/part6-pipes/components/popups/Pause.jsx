import './Pause.css';

export default function Pause(props) {
    if (!props.popups.includes('pause')) {
        return null;
    }
    return (
        <>
            <div className="popup-backdrop" onClick={ props.actionClosePause }>
                <div className="popup" onClick={ e => e.stopPropagation() }>
                    <div className="popup-body text-center">
                        <button className="btn btn-outline-warning" onClick={ props.actionResetLevel }>Reset Level</button>
                    </div>
                    <div className="popup-footer">
                        <button className="btn btn-danger" onClick={ props.actionEndGame }>End Game</button>
                        <button className="btn btn-primary" onClick={ props.actionClosePause }>Resume</button>
                    </div>
                </div>
            </div>
        </>
    );
}

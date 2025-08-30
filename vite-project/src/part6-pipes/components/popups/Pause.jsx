import './Pause.css';

export default function Pause(props) {
    if (!props.popups.includes('pause')) {
        return null;
    }
    return (
        <>
            <div className="popup-backdrop" onClick={ props.actionClosePause }>
                <div className="popup" onClick={ e => e.stopPropagation() }>
                    <div className="popup-body">
                    </div>
                    <div className="popup-footer">
                        <button className="btn btn-danger" onClick={ props.actionEndGame }>Quit</button>
                        <button className="btn btn-warning" onClick={ props.actionClosePause }>Resume</button>
                    </div>
                </div>
            </div>
        </>
    );
}

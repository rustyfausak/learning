import './Options.css';

export default function Options(props) {
    if (!props.popups.includes('options')) {
        return null;
    }
    return (
        <>
            <div className="popup-backdrop" onClick={ props.actionCloseOptions }>
                <div className="popup" onClick={ e => e.stopPropagation() }>
                    <div className="popup-body">
                    </div>
                    <div className="popup-footer">
                        <a className="btn btn-warning" onClick={ props.actionCloseOptions }>Back</a>
                    </div>
                </div>
            </div>
        </>
    );
}

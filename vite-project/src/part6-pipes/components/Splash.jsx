import './Splash.css';

export default function Splash(props) {
    if (props.appState !== 'splash') {
        return null;
    }
    return (
        <>
            <div className="splash">
                <div className="title">
                    <h1>Pipes</h1>
                </div>
                <div className="version">v{ props.version }</div>
                <div className="menu">
                    <div className="menu-inner">
                        <a className="btn btn-primary" onClick={ props.actionSetup }>Play</a>
                        <a className="btn btn-warning" onClick={ props.actionOpenOptions }>Options</a>
                        <a href="../" className="btn btn-danger">Quit</a>
                    </div>
                </div>
            </div>
        </>
    );
}

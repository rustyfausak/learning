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
                        <button className="btn btn-primary" onClick={ props.actionSetup }>Play</button>
                        <button className="btn btn-warning" onClick={ props.actionOpenOptions }>Options</button>
                        <a href="../" className="btn btn-danger">Quit</a>
                    </div>
                </div>
            </div>
        </>
    );
}

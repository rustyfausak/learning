import './Setup.css';

export default function Setup(props) {
    if (props.appState !== 'setup') {
        return null;
    }
    return (
        <>
            <div className="setup">
                <h1>New Game / Setup</h1>
                <div class="d-flex gap-3">
                    <a href="#" className="btn btn-warning btn-lg" onClick={ props.actionSplash }>Back</a>
                    <a href="#" className="btn btn-primary btn-lg" onClick={ props.actionGame }>Start Game</a>
                </div>
            </div>
        </>
    );
}

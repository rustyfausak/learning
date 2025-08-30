import './Setup.css';

export default function Setup(props) {
    if (props.appState !== 'setup') {
        return null;
    }

    return (
        <>
            <div className="setup">
                <div className="setup-inner">
                    <h1>New Game</h1>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Seed</span>
                        <input
                            type="text"
                            value={ props.seed }
                            className="form-control"
                            placeholder="Seed"
                            aria-label="Seed"
                            onChange={ (event) => props.setSeed(event.currentTarget.value) }
                        />
                    </div>
                    <div className="d-flex gap-3">
                        <button className="btn btn-warning btn-lg" onClick={ props.actionSplash }>Back</button>
                        <button className="btn btn-primary btn-lg" onClick={ props.actionStartGame }>Start Game</button>
                    </div>
                </div>
            </div>
        </>
    );
}

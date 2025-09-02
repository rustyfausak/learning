import { useState } from 'react';
import Splash from './components/Splash.jsx';
import Options from './components/popups/Options.jsx';
import Setup from './components/Setup.jsx';
import Game from './components/Game.jsx';
import Run from './classes/Run.jsx';
import Randomizer from './classes/Randomizer.jsx';
import StandardDeck from './decks/Standard.jsx';
import Pause from './components/popups/Pause.jsx';
import { createToken } from './funcs.jsx';

export default function App() {
    const version = '0.0.1';
    const [appState, setAppState] = useState('splash');
    const [popups, setPopups] = useState([]);
    const [run, setRun] = useState(null);
    const [seed, setSeed] = useState('');

    function actionSplash() {
        setAppState('splash');
    }

    function actionSetup() {
        setSeed(createToken());
        setAppState('setup');
    }

    function actionAddPopup(name) {
        setPopups((oldPopups) => [...oldPopups, name]);
    }

    function actionRemovePopup(name) {
        setPopups((oldPopups) => oldPopups.filter(p => p !== name));
    }

    function actionStartGame() {
        setRun(new Run({
            deck: new StandardDeck(),
            randomizer: new Randomizer(seed),
        }));
        setAppState('game');
    }

    function actionEndGame() {
        setRun(null);
        setPopups(() => []);
        setAppState('splash');
    }

    function syncRun() {
        setRun(Object.assign(Object.create(Object.getPrototypeOf(run)), run));
    }

    return (
        <>
            <Splash
                version={ version }
                appState={ appState }
                actionSetup={ actionSetup }
                actionOpenOptions={ () => actionAddPopup('options') }
            />
            <Setup
                appState={ appState }
                seed={ seed }
                setSeed={ setSeed }
                actionSplash={ actionSplash }
                actionStartGame={ actionStartGame }
            />
            <Game
                appState={ appState }
                actionSplash={ actionSplash }
                actionOpenPause={ () => actionAddPopup('pause') }
                run={ run }
                syncRun={ syncRun }
            />
            <Options
                popups={ popups }
                actionCloseOptions={ () => actionRemovePopup('options') }
                />
            <Pause
                popups={ popups }
                actionClosePause={ () => actionRemovePopup('pause') }
                actionEndGame={ actionEndGame }
            />
        </>
    );
}

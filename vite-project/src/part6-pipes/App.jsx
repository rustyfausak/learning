import { useState } from 'react';
import Splash from './components/Splash.jsx';
import Options from './components/popups/Options.jsx';
import Setup from './components/Setup.jsx';
import Game from './components/Game.jsx';

export default function App() {
    const version = '0.0.1';
    const [appState, setAppState] = useState('splash');
    const [popups, setPopups] = useState([]);

    function actionSplash() {
        setAppState('splash');
    }

    function actionSetup() {
        setAppState('setup');
    }

    function actionAddPopup(name) {
        setPopups((oldPopups) => [...oldPopups, name]);
    }

    function actionRemovePopup(name) {
        setPopups((oldPopups) => oldPopups.filter(p => p !== name));
    }

    function actionGame() {
        setAppState('game');
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
                actionSplash={ actionSplash }
                actionGame={ actionGame }
            />
            <Game
                appState={ appState }
                actionSplash={ actionSplash }
            />
            <Options
                popups={ popups }
                actionCloseOptions={ () => actionRemovePopup('options') }
            />
        </>
    );
}

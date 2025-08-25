import RollButton from "./RollButton";
import NewGameButton from "./NewGameButton";
import StartGameButton from "./StartGameButton";
import Timer from "./Timer";
import Die from "./Die";
import DieClass from "../classes/Die";
import { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';

export default function Game () {
    const diceNumberOfSides = 6;
    const [dice, setDice] = useState([]);
    const [time, setTime] = useState(0);
    const startTimeRef = useRef(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameRolling, setGameRolling] = useState(false);
    const gameWon = isGameWon();
    const newGameButtonRef = useRef(null);

    useEffect(() => {
        if (gameWon) {
            //console.log("focus newGameButtonRef");
            newGameButtonRef.current.focus();
        }
    }, [gameWon]);

    useEffect(() => {
        let intervalId;
        const timerUpdateDelayMs = 27;
        if (gameStarted) {
            intervalId = setInterval(() => setTime(Date.now() - startTimeRef.current), timerUpdateDelayMs);
        }
        if (gameWon) {
            clearInterval(intervalId);
            return;
        }
        return () => clearInterval(intervalId);
    }, [gameStarted, gameWon]);

    useEffect(() => {
        let intervalId1, intervalId2;
        const randomizeDelayMs = 33;
        const rollingDurationMs = 333;
        if (gameRolling) {
            intervalId1 = setInterval(() => randomizeUnlockedDice(), randomizeDelayMs);
            intervalId2 = setTimeout(() => setGameRolling(false), rollingDurationMs);
        }
        return () => {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
        }
    }, [gameRolling]);

    // Initialize all the dice
    function initializeDice() {
        //console.log("initializeDice");
        return Array.from({length: 10}, () => new DieClass(diceNumberOfSides));
    }

    // Determine if the game is won
    function isGameWon() {
        //console.log("isGameWon");
        if (!gameStarted) return false;
        if (gameRolling) return false;
        return dice.every((die) => die.value && die.value == dice[0].value);
    }

    // Handling locking an individual die
    function onDieLock(dieIndex) {
        //console.log("onDieLock" + dieIndex);
        if (gameWon) return;
        if (!gameStarted) return;
        if (gameRolling) return;
        setDice((prevDice) => {
            return prevDice.map((die, index) => {
                if (index === dieIndex) {
                    die.isLocked = !die.isLocked;
                }
                return die;
            });
        });
    }

    // Handle rerolling all unlocked dice
    function onRoll() {
        if (gameWon) return;
        if (!gameStarted) return;
        if (gameRolling) return;
        setGameRolling(true);
    }

    function randomizeUnlockedDice() {
        console.log("randomizeUnlockedDice");
        setDice((prevDice) => {
            return prevDice.map((die) => {
                if (!die.isLocked) {
                    die.reroll();
                }
                return die;
            });
        });
    }

    function onStartGame() {
        setGameStarted(true);
        setDice(initializeDice());
        setGameRolling(true);
        startTimeRef.current = Date.now();
    }

    // Create the dice components
    const diceComponents = dice.map((die, index) => {
        return (
            <Die
                key={index}
                value={die.value}
                isLocked={die.isLocked}
                onClick={() => onDieLock(index)}
                />
        );
    });

    let actionButton;
    if (gameWon) {
        actionButton = (
            <>
                <NewGameButton
                    onClick={onStartGame}
                    ref={newGameButtonRef}
                />
                <Confetti />
            </>
        );
    }
    else if (gameStarted) {
        actionButton = (
            <RollButton
                onClick={onRoll}
            />
        );
    }
    else {
        actionButton = (
            <StartGameButton
                onClick={onStartGame}
            />
        );
    }

    // Render
    return (
        <main>
            <div className="game-container">
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                { gameStarted && <Timer time={time} />}
                <div className="dice-container">
                    { gameWon && <div className="you-win" aria-live="polite">You Win!</div> }
                    { diceComponents }
                </div>
                { actionButton }
            </div>
        </main>
    )
}

import RollButton from "./RollButton";
import Die from "./Die";
import DieClass from "./../classes/DieClass";
import { useState, useEffect } from 'react';

export default function Game () {
    const [dice, setDice] = useState([]);

    // Initialize the dice
    useEffect(() => {
        console.log("init dice");
        let newDice = [];
        for (let i = 0; i < 10; i++) {
            const newDie = new DieClass();
            newDice.push(newDie);
        }
        setDice(newDice);
    }, []);

    // Create the dice components
    console.log("Rerender");
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

    // Handling locking an individual die
    function onDieLock(dieIndex) {
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
        console.log("onRoll");
        setDice((prevDice) => {
            return prevDice.map((die) => {
                if (!die.isLocked) {
                    die.reroll();
                }
                return die;
            });
        });
    }

    return (
        <main>
            <div className="game-container">
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="die-container">
                    {diceComponents}
                </div>
                <RollButton
                    onRoll={onRoll}
                />
            </div>
        </main>
    )
}

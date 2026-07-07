import { useState } from "react";
import styles from './Game.module.scss'

const CHOICES = [
    { name: "rock", emoji: "✊" },
    { name: "paper", emoji: "✋" },
    { name: "scissors", emoji: "✌️" },
];

const playerBtn = {
    marginRight: 10
}

const choiceStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 40
}

const emojiStyles = {
  fontSize: 64,
  marginRight: 20
}

const nameStyles = {
  margin: 0,
  fontSize: 24,
  color: '#ffff'
}

const resultStyle = {
  marginTop: 40,
  fontSize: 48,
  color: '#ffff'
}

function RockPaperScissors() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [pcChoice, setPcChoice] = useState(null);
    const [result, setResult] = useState(null);

    function handlePlayerChoice(choice) {
        // eslint-disable-next-line
        const pcChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
        setPlayerChoice(choice);
        setPcChoice(pcChoice);

        if (choice.name === pcChoice.name) {
            setResult("Is a Tie");
        } else if (
            (choice.name === 'scissors' && pcChoice.name === 'paper')
            || (choice.name === 'rock' && pcChoice.name === 'scissors')
            || (choice.name === 'paper' && pcChoice.name === 'rock')
        ) {
            setResult('You Win')
        } else {
            setResult("You Lose")
        }
    }

    function resetGame() {
        setPlayerChoice(null);
        setPcChoice(null);
        setResult(null);
    }

    return (
        <div className={styles.container}>
            <h1 style={{ color: "#ffffff" }}>Rock Paper Scissors Game</h1>

            <div className={styles.choices}>
                {CHOICES.map(choice => (
                    <button
                        style={playerBtn}
                        key={choice.name}
                        onClick={() => handlePlayerChoice(choice)}
                        aria-label={choice.name}
                    >
                        {choice.emoji}
                    </button>
                ))}

                {pcChoice && playerChoice && (
                    <div className={styles.results}>
                        <div style={choiceStyles}>
                            <span style={emojiStyles}>{playerChoice.emoji}</span>
                            <p style={nameStyles}>Your Choice is {playerChoice.name}</p>
                        </div>
                        <div style={choiceStyles}>
                            <span style={emojiStyles}>{pcChoice.emoji}</span>
                            <p style={nameStyles}>The PC Choice is {pcChoice.name}</p>
                        </div>
                        <h2 style={resultStyle}>{result}</h2>
                        <button onClick={resetGame} className={styles.button}>Play Again</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RockPaperScissors;

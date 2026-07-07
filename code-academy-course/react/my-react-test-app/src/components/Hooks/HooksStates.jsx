import { useState } from "react";
const outerDivStyle = {margin: "40px 0"};

function Toggle() {
  const [toggle, setToggle] = useState();

  function toggleOnClick(str) {
        setToggle(str)
  }

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => toggleOnClick("On")}>On</button>
      <button onClick={() => toggleOnClick("Off")}>Off</button>
    </div>
  );
}

function ToggleColor() {
    const [color, setColor] = useState('aqua');

    const divStyle = {background: color, padding: "30px 10px"};
    const colorsNames = ['aqua', 'blueviolet', 'chocolate', 'lightsalmon', 'darkcyan', 'cornflowerblue'];

    return (
        <div style={divStyle}>
            <h2>Background color is{color ? ` ${color}` : '?'}</h2>
            {colorsNames.map((colorsName) => (
                <button onClick={() => setColor(colorsName)} key={colorsName} className={colorsName}>
                    {colorsName.toLocaleUpperCase()}
                </button>
            ))}
        </div>
    )
}

function ToggleLoading() {
    const [isLoading, setIsLoading] = useState(null);

    return (
        <div style={outerDivStyle}>
            <h2>is data loading? {isLoading ? 'Loading' : 'Not Loading'}</h2>
            <button onClick={() => setIsLoading(true)}>Loading On</button>
            <button onClick={() => setIsLoading(false)}>Loading Off</button>
        </div>
    )
}

function SetStateOutOfJSX() {
    const validPhNumber = /^\d{1,10}$/;
    const [phone, setPhone] = useState('');

    function handleOnChange({ target }) {
        const phoneNum = target.value;
        const isValid = validPhNumber.test(phoneNum);

        if (isValid) {
            setPhone(phoneNum);
        }
    }

    return (
        <div style={outerDivStyle}>
            <h2>Use State Setter Outside of JSX</h2>
            <div className="check-num">
                <label htmlFor='phone-number'> Phone: </label>
                <input id='phone-number' value={phone} onChange={handleOnChange}></input>
            </div>
        </div>
    )
}

function SetPreviousCountState() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prevCount => prevCount + 1);

    return (
        <div style={outerDivStyle}>
            <h2>Set count prevState to update counter {count}</h2>
            <button onClick={increment}>Click to increment count </button>
        </div>
    )
}

const quizStyles = {
    container: {
        padding: "20px"
    },
    questionBox: {
        marginBottom: "20px"
    },
    buttons: {
        display: "flex",
        justifyContent: "center",
        gap: "10px"
    },
    result: {
        marginTop: "20px",
        fontWeight: "bold"
    }
};

function QuizNavBar({ questions }) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState("");

    if (!questions || questions.length === 0) return null;

    const currentQuestion = questions[questionIndex];

    const isFirstQuestion = questionIndex === 0;
    const isLastQuestion = questionIndex === questions.length - 1;

    const handleAnswerChange = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleNext = () => {
        if (!selectedAnswer) {
            alert("Please select an answer");
            return;
        }

        setAnswers(prev => {
            const copy = [...prev];
            copy[questionIndex] = selectedAnswer;
            
            return copy;
        });

        setSelectedAnswer("");

        setQuestionIndex(prev =>
            Math.min(prev + 1, questions.length - 1)
        );
    };

    const handleBack = () => {
        setQuestionIndex(prev => Math.max(prev - 1, 0));
    };

    const handleFinish = () => {
        const finalAnswers = [...answers];
        finalAnswers[questionIndex] = selectedAnswer;

        const score = finalAnswers.reduce((total, answer, index) => {
            return questions[index]?.answer === answer ? total + 1 : total;
        }, 0);

        setResult(score);
        setShowResult(true);
    };

    const isPerfectScore = result === questions.length;

    return (
        <div style={quizStyles.container}>
            <nav>
                <h2>
                    Question #{questionIndex + 1}
                </h2>

                <div style={quizStyles.questionBox}>
                    <p>{currentQuestion.question}</p>

                    <label>Select an answer:</label>

                    <select
                        value={selectedAnswer}
                        onChange={handleAnswerChange}
                    >
                        <option value="">
                            -- choose an option --
                        </option>

                        {currentQuestion.options.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={quizStyles.buttons}>
                    <button onClick={handleBack} disabled={isFirstQuestion}>
                        Go Back
                    </button>

                    <button onClick={handleNext} disabled={isLastQuestion}>
                        Go Next
                    </button>

                    {isLastQuestion && (
                        <button onClick={handleFinish}>
                            Finish
                        </button>
                    )}
                </div>

                {showResult && (
                    <div style={quizStyles.result}>
                        {isPerfectScore ? (
                            <p>🎉 Perfect score: {result} / {questions.length}</p>
                        ) : (
                            <p>👍 Good job: {result} / {questions.length}, keep trying</p>
                        )}
                    </div>
                )}
            </nav>
        </div>
    );
}

function PersonalPizza({ options }) {
    const [selected, setSelected] = useState([]);

    const toggleTopping = ({target}) => {
        const clickedTopping = target.value;

        setSelected((prev) => {
            if (prev.includes(clickedTopping)) {
                return prev.filter(topping => topping !== clickedTopping);
            } else {
                return [clickedTopping, ...prev];
            }
        })
    }

    return (
        <div style={outerDivStyle}>
            {options.map(option => (
                <button
                    value={option}
                    onClick={toggleTopping}
                    key={option} 
                >
                {selected.includes(option) ? 'Remove ' : 'Add '}
                {option}

                </button>
            ))}
        </div>
    )
}

function SeparateHooksForSeparateStates() {
    const [title, setTitle] = useState("Best Musical Ever");
    const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"]);
    const [locations, setLocations] = useState({
        Chicago: {
            dates: ["01 / 06 / 2026", "04 / 06 / 2026"], 
            address: "chicago theater"}, 
        "San Francisco": {
            dates: ["02 / 06 / 2026"], 
            address: "sf theater"
        }
    })

    return (
        <div>
            <h2>{title}</h2>
            <h3><b>Casting:</b> </h3>
            <ul>
                {actors.map((cast, index) => (
                    <li key={index}>{cast}</li>
                ))}
            </ul>
            <div>
                {Object.entries(locations).map(([city, info]) => (
                    <div key={city}>
                        <h2>{city}</h2>
                        <p><b>Address:</b> {info.address}</p>

                        <ul>
                            {info.dates.map(date => (
                                <li key={date}><b>Dates:</b> {date}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export {
    Toggle,
    ToggleColor,
    ToggleLoading,
    SetStateOutOfJSX,
    SetPreviousCountState,
    QuizNavBar,
    PersonalPizza,
    SeparateHooksForSeparateStates
}

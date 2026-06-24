import { useState, useEffect } from "react";
const divStyles = {
    margin: "40px 0"
}

function PageTitle({ title }) {
  const [name, setName] = useState('');
 
    useEffect(() => {
        document.title = `Hi, ${name}`;
    }, [name]);

    return (
        <div style={divStyles}>
            <h2>{title}</h2>
            <p>Use {name} input field below to rename this page!</p>
            <p title={name}>New name os: {name}</p>

            <input 
                onChange={({target}) => setName(target.value)} 
                value={name} 
                type='text' />
        </div>
    );
}

function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.counter = `Counter is, ${counter}`
    }, [counter]);

    const handleCounter = () => {
        setCounter((prev) => {
            return prev +1;
        })
    }

    return (
        <div style={divStyles}>
            <p>You have clicked {counter} times</p>
            <button
                onClick={handleCounter}
            >
                Click me
            </button>
        </div>
    )
}

function CounterCleanUp() {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter((prev) => prev + 1)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleIncrement)

        return () => {
            document.removeEventListener('mousedown', handleIncrement)
        }
    }, []);

    return (
        <div style={divStyles}>
            <h2>Click anywere on windows to start counter: Counter is {counter}</h2>
            <p>This counter use a useEffect callback function to clean up the event listener
            and avoid memory leaks which this way is best practices for each event listener that are running endlessly</p>
            <p>so Anything you create outside React that keeps running needs cleanup</p>
        </div>
    )
}

function AutoTimerCleanEvent() {
    const [time, setTime] = useState(0);
    const [name, setName] = useState('');
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);

        return () =>(
            clearInterval(intervalId)
        )
    }, []);

    const handleChange = ({ target }) => {
        setName(target.value);
    }

    return (
        <div style={divStyles}>
            <h2>your timer is {time}</h2>
            <form>
                <input value={name} onChange={handleChange} />
            </form>
        </div>
    )

}

export {
    PageTitle,
    Counter,
    CounterCleanUp,
    AutoTimerCleanEvent
}

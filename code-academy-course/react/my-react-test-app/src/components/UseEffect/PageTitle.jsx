import { useState, useEffect, useEffectEvent } from "react";
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

function TheUseEffectEvent() {
    const [clickCount, setClickCount] = useState(0);
    const [latestCount, setLatestCount] = useState(0);

    const increment = () => setClickCount(prev => prev + 1);
    const updateLastest = useEffectEvent(() => {
        setLatestCount(clickCount);
    })

    useEffect(() => {
        const handleClick = () => {
            increment();
            updateLastest();
        }

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    }, []);

    return (
        <div style={divStyles}>
            <h2>Document Clikcs are: {clickCount}</h2>
            <h3>However, the latest count from useEffectEvent(...) is: {latestCount}</h3>
        </div>
    )
}

function UseEffectConclusion() {
    const conclusionStyles = {
        ul: {
            padding: "revert"
        },
        li: {
            padding: "20px 0",
            textAlign: "left",
            listStyle: "disc"
        },
        table: {
            textAlign: "left"
        }
    }
    const useEffectList = [
        "We can import the useEffect() function from the 'react' library and call it in our function components.",
        "Effect refers to a function that we pass as the first argument of the useEffect() function. By default, the Effect Hook calls this effect after each render.",
        "The cleanup function is optionally returned by the effect. If the effect does anything that needs to be cleaned up to prevent memory leaks, then the effect returns a cleanup function, then the Effect Hook will call this cleanup function before calling the effect again as well as when the component is being unmounted.",
        "The dependency array is the optional second argument that the useEffect() function can be called with in order to prevent repeatedly calling the effect when this is not needed. This array should consist of all variables that the effect depends on."
    ]
    return (
        <div style={divStyles}>
            <h2>Use Effect and Effect Event conclusion</h2>
            <ul style={conclusionStyles.ul}>
                {useEffectList.map((item, index) => (
                    <li style={conclusionStyles.li} key={index}>{item}</li>
                ))}
            </ul>
            <p>The Effect Hook is all about scheduling when our effect’s code gets executed. We can use the dependency array to configure when our effect is called in the following ways:</p>
            <table>
                <thead>
                    <tr>
                        <th>Dependency Array</th>
                        <th>Effect called after first render & …</th>
                    </tr>
                </thead>
                <tbody style={conclusionStyles.table}>
                    <tr>
                        <th>undefined</th>
                        <th>every re-render</th>
                    </tr>
                    <tr>
                        <th>Empty array</th>
                        <th>no re-renders</th>
                    </tr>
                    <tr>
                        <th>Non-empty array</th>
                        <th>when any value in the dependency array changes</th>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export {
    PageTitle,
    Counter,
    CounterCleanUp,
    AutoTimerCleanEvent,
    TheUseEffectEvent,
    UseEffectConclusion
}

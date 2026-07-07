import { useEffect } from "react";

export function Thought(props) {
    const { thought, removeThought} = props;

    useEffect(() => {
        const timeRemaining = thought.expiresAt - Date.now();
        const timesUp = setTimeout(() => {
            props.removeThought(thought.id);
        }, timeRemaining);

        return () => {
            clearTimeout(timesUp)
        }
    // eslint-disable-next-line
    }, [thought])

    const handleRemoveClick = () => {
        removeThought(thought.id);
    }

    return (
        <li>
            <button
                aria-label="Remove Thought"
                onClick={handleRemoveClick}
            >&times;</button>
            <div>{thought.text}</div>
        </li>
    )
}

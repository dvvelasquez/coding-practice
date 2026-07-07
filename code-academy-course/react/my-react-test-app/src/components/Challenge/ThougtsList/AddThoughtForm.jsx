import { useState } from "react";
import { getNewExpirationTime, generatedId } from "./utitlities";

export function AddThoughtForm({ addThought }) {
    const [text, setText] = useState('');

    const handleTextChange = ({ target }) => {
        const { value } = target;
        setText(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(text.length) {
            const thought = {
                id: generatedId(),
                text: text,
                expiresAt: getNewExpirationTime()
            }
            addThought(thought);
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                aria-label="What's on your mind?"
                placeholder="What's on your mind?"
                value={text}
                onChange={handleTextChange}
            />
            <input type="submit" value="Add Thought"/>
        </form>
    )
}

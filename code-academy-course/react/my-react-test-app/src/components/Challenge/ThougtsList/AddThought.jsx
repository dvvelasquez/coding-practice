import { useState } from "react";
import { AddThoughtForm } from "./AddThoughtForm";
import { Thought } from "./Thought";
import { getNewExpirationTime, generatedId } from "./utitlities";

export default function AddThought() {
    const [thoughts, setThoughts] = useState([
        {
            id: generatedId(),
            text: "First hardcoded thought",
            expiresAt: getNewExpirationTime()
        },
        {
            id: generatedId(),
            text: "Second hardcoded thought",
            expiresAt: getNewExpirationTime()
        }
    ]);

    const addThought = (thought) => {
        setThoughts(thoughts => [
            thought,
            ...thoughts
        ])
    }

    const removeThought = (thoughtIdToRemove) => {
        setThoughts(thoughts => {
            return thoughts.filter(thought => thought.id !== thoughtIdToRemove)
        })
    }

    return (
        <div>
            <h2> Add Thought Challenge </h2>
            <AddThoughtForm addThought={addThought} />

            <ul>
                {thoughts.map(thought => (
                    <Thought
                        key={thought.id}
                        thought={thought}
                        removeThought={removeThought}
                    />
                ))}
            </ul>

        </div>
    )
}

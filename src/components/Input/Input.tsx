import React, { useState } from "react";
import "./Input.css";

interface InputProps {
    onSubmit: (title: string) => void;
}

export const Input: React.FC<InputProps> = ({ onSubmit }) => {
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        if (!input.trim()) return;
        onSubmit(input);
        setInput("");
    };

    return (
        <div className="container">
            <input
                type="text"
                className="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="button" onClick={handleSubmit}>Adicionar</button>
        </div>
    );
};

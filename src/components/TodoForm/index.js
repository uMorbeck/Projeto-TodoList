import React, {useState, useEffect, useRef} from "react";
import "./styles.css";

export default function TodoForm(props){
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    function handleSubmit(sub){
        sub.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput("");
    };

    function handleChange(chg){
        setInput(chg.target.value);
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input 
                        type="text" 
                        placeholder="Update Your Item"
                        value={input}
                        onChange={handleChange}
                        ref={inputRef}
                        name="text"
                        className="todo-input  edit"
                    />
                    <button className="todo-submit-button  edit" type="submit">Update</button>
                </>
            ) : (
            <>
                <input 
                    type="text" 
                    placeholder="Add a todo"
                    value={input}
                    onChange={handleChange}
                    ref={inputRef}
                    name="text"
                    className="todo-input"
                />
                <button className="todo-submit-button" type="submit">Add todo</button>
            </>
            )}
        </form>
    );
};
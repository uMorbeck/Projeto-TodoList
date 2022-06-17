import React, {useState} from "react";

import {RiCloseCircleLine, RiCheckboxCircleLine} from "react-icons/ri"
import {TiEdit} from "react-icons/ti"

import TodoForm from "../TodoForm"
import "./styles.css";

export default function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitUpdate = value => { //Outra forma de fazer função
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        });
    };

    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}
        >
            <div 
                key={todo.id}
                className="todo-container"
            >
                {todo.text}
            </div>
            <div className="icons">
                <RiCheckboxCircleLine
                    onClick={() => completeTodo(todo.id)}
                    className="delete-icon"
                />
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
                <TiEdit
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className="edit-icon"
                />
            </div>
        </div>
    ))
}
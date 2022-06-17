import React from 'react';

import './App.css';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div className="todo-app">
      <TodoList/>
      <span className='credits'>
        Made by <a className='credits' href='https://github.com/uMorbeck/projeto-todolist'>uMorbeck</a>
      </span>
    </div>
  );
};

import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/styles/stylecomponent.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="body">
      <TodoList/>
    </div>
  );
}

export default App;

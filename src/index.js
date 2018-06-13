import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';

const destination = document.getElementById('root');

ReactDOM.render(
  <div>   
	<TodoList />
  </div>,
  destination
);
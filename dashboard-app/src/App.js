import React from 'react';
import './App.css';
import Dailychallenge from './components/DailyChallenge';
import DailyQuote from './components/DailyQuote';
import Calendar from './components/Calendar';
import TodoList from './components/TodoList';
import Notes from './components/Notes';

const App = () => {
	return (
		<div className="dashboard">
			<Dailychallenge />
			<DailyQuote />
			<Calendar className="calendar" />
			<TodoList />
			<Notes />
		</div>
	);
};

export default App;

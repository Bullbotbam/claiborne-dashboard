import React from 'react';
import './App.css';
import DailyComment from './components/DailyComment';
import DailyQuote from './components/DailyQuote';
import Calendar from './components/Calendar';
import TodoList from './components/TodoList';
import Notes from './components/Notes';

const App = () => {
  return (
    <div className="dashboard">
      <DailyComment />
     <DailyQuote />
     <Calendar className="calendar" />
      <TodoList />
      <Notes />
    </div>
  );
};

export default App;

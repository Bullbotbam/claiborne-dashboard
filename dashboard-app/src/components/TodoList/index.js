import React, { useState } from 'react';
import { IconButton, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const addTask = () => {
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = editText;
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditText('');
    } else {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setEditText(tasks[index]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="component">
      <h3>To-Do List</h3>
      <div className="todo-input">
        <TextField
          value={editingIndex !== null ? editText : newTask}
          onChange={(e) => (editingIndex !== null ? setEditText(e.target.value) : setNewTask(e.target.value))}
          placeholder="New task"
          variant="outlined"
          fullWidth
        />
        <Button
          onClick={addTask}
          variant="contained"
          color="primary"
          style={{ marginLeft: '10px' }}
        >
          {editingIndex !== null ? 'Update' : 'Add'}
        </Button>
      </div>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={task} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => editTask(index)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;

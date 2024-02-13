// Update TodoContainer.js

import React from 'react';
import './TodoContainer.css';

const TodoContainer = ({ children, addTask, todolist, taskComplete, removeTask, tasktoUpdate, showPopup, updatetask, removePopup }) => {
  return (
    <div className="todo-container">
      <h1>Todolist</h1>
      <div className="quote">
        <p>Organize your day, accomplish your goals!</p>
      </div>
      <div className="content">
        {React.Children.map(children, (child) => {
          // Check if the child is not null before cloning
          if (child) {
            return React.cloneElement(child, {
              addTask,
              todolist,
              taskComplete,
              removeTask,
              tasktoUpdate,
              showPopup,
              updatetask,
              removePopup,
            });
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default TodoContainer;

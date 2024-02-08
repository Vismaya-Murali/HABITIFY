import React, { useState } from 'react';
import './todo.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();

    const task = { id: Date.now(), text: newTask, completed: false, isEditing: false };

    setTasks((prevTasks) => [...prevTasks, task]);
    setNewTask('');
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const handleToggleEdit = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, isEditing: !task.isEditing }
          : task
      )
    );
  };

  const handleSaveEdit = (taskId, editedText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, text: editedText, isEditing: false }
          : task
      )
    );
  };

  return (
    <body className='todo'>
      <div>
        <header className='todo-header'>
          <h1>Task List</h1>
          <form id="new-task-form" onSubmit={handleAddTask}>
            <input
              type="text"
              name="new-task-input"
              id="new-task-input"
              placeholder="What do you have planned?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <input type="submit" id="new-task-submit" value="Add task" />
          </form>
        </header>
        <main>
          <section className="task-list">
            <h2>Tasks</h2>
            <div id="tasks">
              {tasks.map((task) => (
                <div className="task" key={task.id}>
                  <div className="content">
                    {task.isEditing ? (
                      <input
                        type="text"
                        className="text"
                        value={task.text}
                        onChange={(e) =>
                          setTasks((prevTasks) =>
                            prevTasks.map((t) =>
                              t.id === task.id
                                ? { ...t, text: e.target.value }
                                : t
                            )
                          )
                        }
                        onBlur={() => handleSaveEdit(task.id, task.text)}
                        autoFocus
                      />
                    ) : (
                      <input
                        type="text"
                        className="text"
                        value={task.text}
                        readOnly
                        style={{
                          textDecoration: task.completed
                            ? 'line-through'
                            : 'none',
                        }}
                        onClick={() => handleToggleComplete(task.id)}
                      />
                    )}
                  </div>
                  <div className="actions">
                    <button
                      className={task.isEditing ? 'save' : 'edit'}
                      onClick={() => {
                        if (task.isEditing) {
                          handleSaveEdit(task.id, task.text);
                        } else {
                          handleToggleEdit(task.id);
                        }
                      }}
                    >
                      {task.isEditing ? 'Save' : 'Edit'}
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </body>
  );
}

export default TaskList;

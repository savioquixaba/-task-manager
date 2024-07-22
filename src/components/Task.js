import React from 'react'

function Task({ task }) {
    return(
        <div>
        <input type='checkbox' checked={task.completed} />
        <span>{task.text}</span>
        </div>
    );
}

export default Task;


import React, {useState} from 'react';

function AddTaskForm ({addTask}) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskText.trim()){
            addTask(taskText);
            setTaskText('');
        }
    };


    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={taskText}
                onChange={(e)=> setTaskText(e.target.value)}
                placeholder='Adicionar Nova Tarefa'
        />
        <button type='submit'>Adicionar</button>
        </form>
    );

}

export default AddTaskForm;

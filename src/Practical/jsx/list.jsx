import ReactDOM from 'react-dom/client';
import React, {useState} from 'react';

import '../css/list.css';

function List(){
    let [car, setCars] = useState({brand: "Ford", year: 2020, make: 'American'});
    let [foods, setFoods] = useState(['banana', 'apple', 'mango']);
    let [tasks, setTasks] = useState(['Walk the dog', 'go the park', 'Back to home']);
    function handleBrandChange(event){
        setCars(c => ({...c, brand: event.target.value}));
    }
    function handleYearChange(event){
        setCars(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCars(c => ({...c, make: event.target.value}));
    }

    function handleClickRemove(index){
        let updateFoods = foods.filter((_, i) => i !== index);
        setFoods(updateFoods);
    }
    function handleFood(){
        const newFood = document.getElementById('foodInput').value;
        setFoods(f => [...f, newFood]);
        document.getElementById('foodInput').value = null;
    }

    function handleAddTask(){
        const newTask = document.getElementById('task').value;
        setTasks(t => [...t, newTask]);
        document.getElementById('task').value = '';
    }
    function handleRemoveTask(index){
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }
    function handleUpTask(index){
        if(index > 0){
            let updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }
    function handleDownTask(index){
        if(index < tasks.length){
            let updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }

    return(
    <>
    <div className='container1'>
        <p>CAR brand: {car.brand}, year: {car.year}, make: {car.make}</p>

        <div className='inputContainer1'>
            <input type="text" value={car.brand} onChange={handleBrandChange} />
            <input type="text" value={car.year} onChange={handleYearChange} />
            <input type="text" value={car.make} onChange={handleMakeChange} />
        </div>
    </div>
    <div className="container2">
        <h1>Foods List</h1>
        <ul className='container2-display'>
            {foods.map((food, index) =>
                <li key={index} onClick={() => handleClickRemove(index)}>{food}</li>
            )}
        </ul>
        <div className='inputContainer2'>
            <input type="text" id="foodInput"/>
            <button onClick={handleFood}>Add</button>
        </div>

    </div>

    <div className='todoList'>
        <h1>Todo List App</h1>
            <div className='todo-input'>
                <input type="text" id='task' placeholder='Enter the task...'/>
                <button onClick={() => handleAddTask()}>Add Task</button>
            </div>
            <ul className='todo-display'>
                {tasks.map((task, index) => 
                    <li key={index}>{task}
                    <button onClick={() => handleRemoveTask(index)} className='deleteBtn'>Delete</button>
                    <button onClick={() => handleUpTask(index)} className='upBtn'>👆</button>
                    <button onClick={() => handleDownTask(index)} className='downBtn'>👇</button>
                    </li>
                )}
            </ul>
    </div>
    </>)
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<List/>);
import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

import style from '../css/useState.module.css';
import { use } from 'react';
function UseMethod(){
    let [value, setValue] = useState(0);
    let [name, setName] = useState('');
    let [age, setAge] = useState();
    let [text, setText] = useState('');
    let [option, setOption] = useState('');
    let [radio, setRadio] = useState('');

    const Decrease = () => {
        setValue(value - 1);
    }
    const Increase = () => {
        setValue(value + 1);
    }
    const Reset = () => {
        setValue(0);
    }

    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleAgeChange(e){
        setAge(e.target.value);
    }
    function handleTextChange(e){
        setText(e.target.value);
    }
    function handleOptionChange(e){
        setOption(e.target.value);
    }
    function handleRadioChange(e){
        setRadio(e.target.value);
    }

    let [color, setColor] = useState('#ffffff');

    function handleColorChange(e){
        setColor(e.target.value);
    }
    return(
    <>
    <div className={style.container}>
        <h2 className={style.title}>{value}</h2>
        <div className={style.btn_gp}>
            <button onClick={Decrease}>Decrease</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Increase}>Increase</button>
        </div>
    </div>
    <div className={style.form_container}>
        <input type='text' placeholder='Name...' value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input type="number" placeholder='Age...' value={age} onChange={handleAgeChange} />
        <p>Age: {age}</p>

        <textarea value={text} onChange={handleTextChange} placeholder='Enter The comment'></textarea>
        <p>Comment: {text}</p>

        <select value={option} onChange={handleOptionChange}>
            <option value="">Select an Option</option>
            <option value="Master Card">Master Card</option>
            <option value="American Express">American Express</option>
            <option value="Credit Card">Credit Card</option>
        </select>
        <p>Select: {option}</p>

        <div className={style.radio_con}>
            <input type="radio" value='Pick Up' checked={radio === 'Pick Up'} onChange={handleRadioChange}/> Pick Up
            <input type="radio" value='Delivery' checked={radio === 'Delivery'} onChange={handleRadioChange}/> Delivery
            <input type="radio" value='Shipping' checked={radio === 'Shipping'} onChange={handleRadioChange}/> Shipping
            <input type="radio" value='Airline' checked={radio === 'Airline'} onChange={handleRadioChange}/> Airline
        </div>
        <p>Radio Option: {radio}</p>

    </div>
    <div className={style.color_container}>
        <h1>Color Picker</h1>
        <div className={style.color_display} style={{backgroundColor: color}}>
            <p className={style.display}>Color: {color}</p>
        </div>
        <label htmlFor="colorName">Color Pick: </label>
        <input type="color" value={color} onChange={handleColorChange} id="colorName"/>
    </div>
    </>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<UseMethod/>)


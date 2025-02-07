import ReactDom from 'react-dom/client'
import React, { useEffect, useState } from 'react'

function UseEffect1(){
    let [count, setCount] = useState(0);
    let [color, setColor] = useState('white');
    let [width, setWidth] = useState(window.innerWidth);
    let [height, setHeight] = useState(window.innerHeight);
    let [time, setTime] = useState(new Date());
    // useEffect(() => {
    //     document.title = `Count: ${count}, ${color}`;
    // }, [count, color]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("Add Render");
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("remove Render");
        };
    }, []);

    useEffect(() => {
        document.title = `${width} x ${height}`
    }, [width, height])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function handleCount(){
        setCount(count => count + 1);
    }
    function handleSubtract(){
        setCount(count => count - 1);
    }
    function handleChangeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    function updateTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        let meridiem = hours >= 12 ? 'PM' : 'Am';
        hours = hours % 12 || 12;

        return `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)} ${meridiem}`;
    }
    function padStart(number){
        return (number < 10 ? "0" : "")+ number;
    }
    return(<>
        <div className='container1'>
            <p style={{backgroundColor: color}}>Count: {count}</p>
            <button onClick={handleCount}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
            <button onClick={handleChangeColor}>Change Color</button>
        </div>
        <div className="container2">
            <h2>Window Width: {width}</h2>
            <h2>Window height: {height}</h2>
        </div>
        <div className='digital-clock'>
            <div className='display'>
                <span>{updateTime()}</span>
            </div>
        </div>
    </>);

}

const container = document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(<UseEffect1/>);
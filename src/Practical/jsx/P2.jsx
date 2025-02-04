import React from "react";

import Props from "./Props";
import Button from "../../components/Button";
import '../css/Props.css';
function P2(){
    const fruits = [
                    {id: '1', name: 'apple', calories: '120'},
                    {id: '2', name: 'orange', calories: '110'},
                    {id: '3', name: 'avocado', calories: '160'},
                    {id: '4', name: 'strawberry', calories: '70'},
                    {id: '5', name: 'blueberry', calories: '60'},
                    {id: '6', name: 'banana', calories: '80'},
    ];
    const vegetables = [
        {id: '1', name: 'salad', calories: '50'},
        {id: '2', name: 'carrots', calories: '70'},
        {id: '3', name: 'okra', calories: '90'},
        {id: '4', name: 'cucumbers', calories: '110'},
        {id: '5', name: 'eggplants', calories: '130'},
        {id: '6', name: 'ginger', calories: '150'},
        {id: '7', name: 'onions', calories: '40'},
    ];

    return(<>
    <Button name={'Home'}/>
        <div className="props-container">
            {fruits.length >= 0 ? <Props category={'fruit'} items={fruits}/> : null }
            {vegetables.length >= 0 ? <Props category={'vegetables'} items={vegetables}/> : null}
        </div>

    </>);
}

export default P2;
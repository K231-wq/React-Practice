import React from 'react';
import PropTypes from 'prop-types';
import image1 from '../images/1.jpg';
import style from './card.module.css';

function Card({
    name = "Guest",
    age = 0,
    email = 'example@gmail.com',
    isEmployed = false,
    imageName = '1',
}){
    const imageUrl = new URL(`../images/${imageName}.jpg`, import.meta.url).href;
    return(
        <>
        <div className={style.card}>
            <div className={style.image}>
                <img src={imageUrl} alt="photos" className={style.img}/>
            </div>
            <div className={style.card_details}>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
                <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
            </div>
        </div>
        </>
    );
}
Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    isEmployed: PropTypes.bool,
    imageName: PropTypes.string
}
Card.defaultProps = {
    name: "Guest",
    age: 0,
    email: 'example@gmail.com',
    isEmployed: false,
    imageName: '1',
}
export default Card;
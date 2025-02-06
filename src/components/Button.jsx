import PropTypes from 'prop-types';
import style from './button.module.css';

function Button({
    url = "index",
    name = "main"
}){
    const handleClick = (e) => { 
        e.target.innerHtml = "Clicked 😀";
        window.location.href = `../../${url}.html`;
    };
    return (
    <>
        <button onClick={(e) => handleClick(e)} className={style.button}>{name}</button>
    </>);
}
Button.prototype = {
    url: PropTypes.string,
    name: PropTypes.string,
}

export default Button;
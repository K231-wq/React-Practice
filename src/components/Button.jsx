import PropTypes from 'prop-types';
import style from './button.module.css';

function Button(prop){
    const handleClick = () => { 
        console.log("Hello");
        window.location.href = "../../index2.html";
    };
    return (
    <>
        <button onClick={handleClick} className={style.button}>Click</button>
    </>);
}
Button.prototype = {
    url: PropTypes.string,
}
export default Button;
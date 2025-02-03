function Button(){
    const handleClick = () => { 
        console.log("Hello");
        window.location.href = "../../index2.html";
    };
    return (
    <>
        <button onClick={handleClick}>Click</button>
    </>);
}
export default Button;
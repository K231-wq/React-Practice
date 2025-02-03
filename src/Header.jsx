function Header(){
    return(
        <>
            <div className="container-header">
                <header>
                    <div className="profiles">
                        <h2>Products</h2>
                    </div>
                    <div className="navbar">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="inputSection">
                        <input type="search" name="search" id="search"/>
                        <button className="search-btn">Search</button>
                    </div>  

                </header>
            </div>
        </>
    );
}
export default Header;
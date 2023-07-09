// import namaste-food-logo from "./namaste-food-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./../App.css"
const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3qdhx6GBRvPmw2KFlr4DYkTq67ix675MJpcPAD4I&s" alt="namaste-food-logo"/>
            </div>
            <div className="nav-item">
                <ul >
                    <li > 
                        <Link to="/">Home</Link> 
                    </li>
                    <li > 
                        <Link to="/about">About Us</Link> 
                    </li>
                    <li > 
                        <Link to="/contact">Contact Us</Link> 
                    </li>
                    <li >Cart</li>
                    <button className="login-button" onClick={()=>{
                        setIsLogin(!isLogin);
                    }}>{isLogin ? 'logout' : 'login'}</button>
                </ul>
            </div>
        </div>
    );
}
export default Header;
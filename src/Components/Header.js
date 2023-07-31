// import namaste-food-logo from "./namaste-food-logo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./../App.css"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    // Subscribing to the store using the selector
    const cartItems = useSelector((state)=>state.cart.items);
    console.log(cartItems);
    return (
        <div className="flex justify-between border-solid-2px-black bg-pink-100 border border-solid border-black">
            <div className="w-56">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3qdhx6GBRvPmw2KFlr4DYkTq67ix675MJpcPAD4I&s" alt="namaste-food-logo"/>
            </div>
            <div className="flex items-center">
                <ul className="flex ">
                    <li className="px-4">
                        online status : {onlineStatus === false ? "🔴":"🟢"}
                    </li>
                    <li className="px-4"> 
                        <Link to="/">Home</Link> 
                    </li>
                    <li className="px-4"> 
                        <Link to="/about">About Us</Link> 
                    </li>
                    <li className="px-4"> 
                        <Link to="/grocery">Grocery</Link> 
                    </li>
                    <li className="px-4 font-bold text-lg">
                        <Link to="/cart"> Cart({cartItems.length} Items) </Link>
                    </li>
                    <button className="px-4" onClick={()=>{
                        setIsLogin(!isLogin);
                    }}>{isLogin ? 'logout' : 'login'}</button>

                     <li className="px-4 font-bold">{loggedInUser}</li>
                    
                </ul>
            </div>
        </div>
    );
}
export default Header;
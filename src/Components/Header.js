// import namaste-food-logo from "./namaste-food-logo.png";
import "./../App.css"
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3qdhx6GBRvPmw2KFlr4DYkTq67ix675MJpcPAD4I&s" alt="namaste-food-logo"/>
            </div>
            <div className="nav-item">
                <ul >
                    <li >Home</li>
                    <li >About Us</li>
                    <li >Contanct Us</li>
                    <li >Cart</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;
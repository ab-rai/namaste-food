import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "./../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((state)=>state.cart.items);
    console.log(`cartItems=${cartItems}`);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        
        dispatch(clearCart());
    }
    return(
        <div>
            <h2 className="text-lg font-bold text-center m-4 p-4">Cart</h2>
            <div className="w-8/12 text-center m-auto">
                <button className="bg-red-400 w-20 text-[3em] font-bold" onClick={handleClearCart}>🗑️</button>
                {cartItems.length === 0 ? <h1>Cart is empty, add some item first </h1>:
                <ItemList items={cartItems}/>
                }
            </div>
            
        </div>
    );
}
export default Cart;
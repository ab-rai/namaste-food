import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { restMenuURL } from "../utils/constant";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const {restId} = useParams();
    const restMenuURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6105073&lng=77.1145653&restaurantId=${restId}&submitAction=ENTER`;
    const [restData, setRestData] = useState(null);
    useEffect(()=>{
        fetchMenu(restMenuURL);
    },[])
    async function fetchMenu(){
        const data = await fetch(restMenuURL);
        const jsonData = await data.json();
        setRestData(jsonData?.data);

    }
    if (!restData) return <Shimmer/>;
    const {name, cloudinaryImageId, cuisines, avgRating } = restData?.cards[0]?.card?.card?.info;
    const restLogo = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`;
    const {itemCards}= restData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="restaurant-menu">
            <img className="restaurant-logo"  src={restLogo} alt="rest logo"/>
            <div className="restaurant-details">
                <h3>{name}</h3>
                <h4>{cuisines ? cuisines.join(',  '): 'No cuisines'}</h4>
                <h4>{avgRating}</h4>
                <h4>Menu:</h4>
                <ol>
                    {itemCards?.map(item=> <li key = {item?.card?.info?.id}>
                        {item?.card?.info?.name} - Price: INR {item?.card?.info?.price/100}
                    </li>)}
                </ol>
            </div>
            
            {/* <h4>{deliveryTime}</h4> */}
        </div>
    );
}
export default RestaurantMenu;
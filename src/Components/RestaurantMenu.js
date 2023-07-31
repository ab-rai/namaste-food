import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {restId} = useParams();
    const restData = useRestaurantMenu(restId);
    const [expandedIndex, setExpandedIndex] = useState(-1);

    if (!restData) return <Shimmer/>;

    const {name, cloudinaryImageId, cuisines, avgRating } = restData?.cards[0]?.card?.card?.info;
    const restLogo = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`;
    // const {itemCards}= restData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = restData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category=>
    category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (
        <div className="flex flex-col w-[60%] border border-red-500 border-solid bg-slate-100 mx-[20%] my-5 rounded-lg">
            <img className="w-[50%] text-center m-auto h-[2%] p-4"  src={restLogo} alt="rest logo"/>
            <div className="w-10/12  m-4 mx-auto">
                <h2 className="font-bold">{name}</h2>
                <h4>{cuisines ? cuisines.join(',  '): 'No cuisines'}</h4>
                <h4>{avgRating}</h4>
                <h4 className="font-bold">Menu:</h4>
                {
                    categories.map((category,index)=><RestaurantCategory showItem = {index===expandedIndex} 
                        setExpandedIndex={()=>setExpandedIndex(index)} key={category.card.card.title}
                         data={category.card.card}/>)
                }
            </div>
        </div>
    );
}
export default RestaurantMenu;
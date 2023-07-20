import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {restId} = useParams();
    const restData = useRestaurantMenu(restId);

    if (!restData) return <Shimmer/>;

    const {name, cloudinaryImageId, cuisines, avgRating } = restData?.cards[0]?.card?.card?.info;
    const restLogo = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`;
    const {itemCards}= restData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="flex flex-col w-[40%] border border-red-500 border-solid bg-slate-200 mx-[30%] my-5 rounded-lg">
            <img className="w-[99%] p-4"  src={restLogo} alt="rest logo"/>
            <div className="m-4">
                <h2 className="font-bold">{name}</h2>
                <h4>{cuisines ? cuisines.join(',  '): 'No cuisines'}</h4>
                <h4>{avgRating}</h4>
                <h4 className="font-bold">Menu:</h4>
                <ol>
                    {itemCards?.map(item=> <li key = {item?.card?.info?.id}>
                        {item?.card?.info?.name} - Price: INR {item?.card?.info?.price/100}
                    </li>)}
                </ol>
            </div>
        </div>
    );
}
export default RestaurantMenu;
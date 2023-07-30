import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
const Body = () => {
    const [restList,setRestList] = useState([]);
    const [filteredRestList,setFilteredRestList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const {loggedInUser, setUserName} = useContext(UserContext);
    useEffect(()=> {
        async function fetchData(){
            const URLSwiggy = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const data = await fetch(URLSwiggy);
            const jsonData = await data.json();
            setRestList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();
    } ,[]);
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return <h2>You seems to be offline, check your internet connection</h2>;
    return   restList && restList.length === 0 ? <Shimmer/> :
    (
        <div className="body">
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}  />
                    <button className=" mx-4 px-4  bg-green-100 rounded-lg hover:border border-solid border-blue-900" onClick={()=>{
                        const filteredRestaurants = restList.filter(rest => 
                            rest.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestList(filteredRestaurants);
                     }}>Search</button>
                    
                </div>
                <div className="flex items-center">
                    <button className="bg-gray-200 rounded-lg px-2 hover:border border-solid border-pink-900" onClick={()=>{
                        const filteredRestaurants = restList.filter(rest => rest.info.avgRating >=4.2);
                        setFilteredRestList(filteredRestaurants);
                    }}> Top Rated Restaurants </button>
                </div>

                <input className="border border-solid border-black m-4 p-4" type="text" value={loggedInUser} 
                    label="User: " onChange={(e)=>setUserName(e.target.value)}>

                </input>
                
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestList?.map(res => 
                    <Link to={`/restaurant/${res.info.id}` } key = {res.info.id}
                        >
                        {
                            res.info.promoted ? 
                            <RestaurantCardPromoted 
                                cloudinaryImageId={res.info.cloudinaryImageId}
                                name = {res.info.name}
                                cuisines = {res.info.cuisines}  
                                avgRating = {res.info.avgRating}
                                deliveryTime = {res.info.deliveryTime} /> :
                            <RestaurantCard 
                                cloudinaryImageId={res.info.cloudinaryImageId}
                                name = {res.info.name}
                                cuisines = {res.info.cuisines}  
                                avgRating = {res.info.avgRating}
                                deliveryTime = {res.info.deliveryTime} />
                        }
                        
                    </Link>
                    )
                }
            </div>
        </div>
    );
}
export default Body;
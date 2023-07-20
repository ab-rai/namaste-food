import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
const Body = () => {
    const [restList,setRestList] = useState([]);
    const [filteredRestList,setFilteredRestList] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(()=> {
        async function fetchData(){
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&page_type=DESKTOP_WEB_LISTING');
            const jsonData = await data.json();
            setRestList(jsonData?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestList(jsonData?.data?.cards[2]?.data?.data?.cards);
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
                            rest.data.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestList(filteredRestaurants);
                     }}>Search</button>
                    
                </div>
                <div className="flex items-center">
                    <button className="bg-gray-200 rounded-lg px-2 hover:border border-solid border-pink-900" onClick={()=>{
                        const filteredRestaurants = restList.filter(rest => rest.data.avgRating >=4.2);
                        setFilteredRestList(filteredRestaurants);
                    }}> Top Rated Restaurants </button>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestList.map(res => 
                    <Link to={`/restaurant/${res.data.id}` } key = {res.data.id}
                        >
                        {
                            res.data.promoted ? 
                            <RestaurantCardPromoted 
                                cloudinaryImageId={res.data.cloudinaryImageId}
                                name = {res.data.name}
                                cuisines = {res.data.cuisines}  
                                avgRating = {res.data.avgRating}
                                deliveryTime = {res.data.deliveryTime} /> :
                            <RestaurantCard 
                                cloudinaryImageId={res.data.cloudinaryImageId}
                                name = {res.data.name}
                                cuisines = {res.data.cuisines}  
                                avgRating = {res.data.avgRating}
                                deliveryTime = {res.data.deliveryTime} />
                        }
                        
                    </Link>
                    )
                }
            </div>
        </div>
    );
}
export default Body;
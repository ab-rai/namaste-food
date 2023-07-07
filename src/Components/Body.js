import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restList,setRestList] = useState([]);
    useEffect(()=> {
        async function fetchData(){
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&page_type=DESKTOP_WEB_LISTING');
            const jsonData = await data.json();
            setRestList(jsonData?.data?.cards[2]?.data?.data?.cards);
        }
        fetchData();
    }
        ,[]);


    if(restList.length === 0){
        return <Shimmer/>
    }
        
    return (
        <div className="body">
            <div className="search">
                <h2>Search</h2>
            </div>
            <div className="restaurant-container">
                {
                    restList.map(res => <RestaurantCard 
                        cloudinaryImageId={res.data.cloudinaryImageId}
                        name = {res.data.name}
                        cuisines = {res.data.cuisines}  
                        rating = {res.data.avgRating}
                        deliveryTime = {res.data.deliveryTime}  
                        />)
                }
            </div>
        </div>
    );
}
export default Body;
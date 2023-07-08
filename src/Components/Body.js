import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [restList,setRestList] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(()=> {
        async function fetchData(){
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&page_type=DESKTOP_WEB_LISTING');
            const jsonData = await data.json();
            setRestList(jsonData?.data?.cards[2]?.data?.data?.cards);
        }
        fetchData();
    } ,[]);
    return   restList.length === 0 ? <Shimmer/> :
    (
        <div className="body">
            <div className="actions-container">
                <div className="search-container">
                    <input type="text" className="search-text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}  />
                    <button className="search-button" onClick={()=>{
                        const filteredRestaurants = restList.filter(rest => 
                            rest.data.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setRestList(filteredRestaurants);
                     }}>Search</button>
                    
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredRestaurants = restList.filter(rest => rest.data.avgRating >=4.2);
                    setRestList(filteredRestaurants);
                }}> Top Rated Restaurants </button>
            </div>
            <div className="restaurant-container">
                {
                    restList.map(res => <RestaurantCard 
                    key = {res.data.id}
                    cloudinaryImageId={res.data.cloudinaryImageId}
                    name = {res.data.name}
                    cuisines = {res.data.cuisines}  
                    avgRating = {res.data.avgRating}
                    deliveryTime = {res.data.deliveryTime}  
                    />)
                }
            </div>
        </div>
    );
}
export default Body;
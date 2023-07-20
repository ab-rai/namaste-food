import { useEffect, useState } from "react";

const useRestaurantMenu = (restId)=>{
    const restMenuURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6105073&lng=77.1145653&restaurantId=${restId}&submitAction=ENTER`;
    const [restData, setRestData] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    async function fetchMenu(){
        const data = await fetch(restMenuURL);
        const jsonData = await data.json();
        setRestData(jsonData?.data);
    }
    return restData;
}
export default useRestaurantMenu;
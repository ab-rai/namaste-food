const RestaurantCard = (props) => {
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime} = props;
    const restLogo = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`;

    return (
        <div className="bg-gray-200 border border-solid border-black m-4 p-4 w-[330px] rounded-lg hover:bg-gray-300">
            <img className="rounded-lg"  src={restLogo} alt="rest logo"/>
            <h3 className="font-bold text-lg my-2">{name}</h3>
            <h4>{cuisines.join(',  ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
}

export const withPromotedLabel = (RestaurantCard)=>{
    return(props)=>{
        return(<div>
            <label className="absolute bg-black m-2 p-2 text-white rounded-lg">
                Promoted
            </label>
            <RestaurantCard {...props}/>
        </div>);
        
    }
}

export default RestaurantCard;
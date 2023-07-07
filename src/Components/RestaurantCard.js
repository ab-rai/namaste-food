const RestaurantCard = (props) => {
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime} = props;
    const restLogo = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`;

    return (
        <div className="restaurant-card">
            <img className="restaurant-logo"  src={restLogo} alt="rest logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(',  ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
}
export default RestaurantCard;
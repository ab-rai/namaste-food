const ItemList = ({items}) =>{
    const URLIMAGE = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    return (
        <div>
            {
                items.map((item)=>{
                    return (
                        <div key={item.card.info.id} className="text-left p-2 m-2  border-gray-200 border-b-2 flex content-between">
                            <div className="w-9/12">
                                <div className="py-2">
                                    <span>{item.card.info.name}</span>
                                    <span className="font-bold">{` - ₹${item.card.info.price? item.card.info.price/100:item.card.info.defaultPrice/100}`}</span>
                                </div>
                                <p className="text-xs">
                                    {item.card.info.description}
                                </p>
                            </div>
                            <div className="w-3/12">
                                <div className="absolute">
                                <button className="p-1  bg-black text-white shadow-lg h-6 rounded-lg  text-sm m-1">Add +</button>
                                </div>
                                
                                <img  src={`${URLIMAGE}${item.card.info.imageId}`} alt="item-logo"></img>
                            </div>
                           
                        </div>
                    )
                })
            }
        

        </div>
    );
}
export default ItemList;
import ItemList from "./ItemList";

const RestaurantCategory = ({data,setExpandedIndex,showItem})=>{
    const handleClick = ()=>{
        setExpandedIndex();
    }
    return(
        <div>
            <div className="my-4 text-center shadow-lg  bg-gray-50 p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {`${data.title} (${data.itemCards.length})`}
                    </span>

                    <span>
                       ⬇️
                    </span>
                </div>
                
                {showItem && <ItemList items={data.itemCards}/>}
            </div>
            
        </div>
    );
}
export default RestaurantCategory;
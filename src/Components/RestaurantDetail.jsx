import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const RestaurantDetail = ()=>{
    const [restaurantDetails, setRestaurantDetails] = useState([]);
    
    const { restaurantId } = useParams();
    console.log("restaurantId from params:", restaurantId);


    useEffect(()=>{
        fetchRestaurantDetails()
    },[restaurantId])
const fetchRestaurantDetails = async () => {
  try {
    const response = await fetch(
      "/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" +
        restaurantId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await response.json();
    console.log("Raw JSON:", json);

    const regularCard = json?.data?.cards?.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR
    );

    const itemCards =
      regularCard?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;

    if (itemCards) {
      setRestaurantDetails(itemCards);
    } else {
      console.warn("No itemCards found..");
      setRestaurantDetails([]);
    }
  } catch (err) {
    console.error("Error fetching restaurant details:", err);
    setRestaurantDetails([]);
  }
};

    return (
        <div className="restaurant-details">
            {restaurantDetails.map((item, index) => {
            const info = item.card.info;
            return (
                <div key={index} className="dish-card">
                <div className="dish-info">
                    <h2 className="dish-name">{info.name}</h2>
                    <h3 className="dish-price">₹{info.price ? info.price / 100 : info.defaultPrice / 100}</h3>
                    <p className="dish-desc">{info.description}</p>
                </div>
                <div className="dish-image">
                    <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                    alt={info.name}
                    />
                    <button className="add-btn">ADD</button>
                </div>
                </div>

                    );
                    })}
                </div>
);
}
export default RestaurantDetail;
import {useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";
import { Link } from "react-router-dom";
const MainComponent = () => {
        const [listOfRestaurants , setListOfRestaurants] = useState([]);

        const fetchData = async () => {
            try {
            const response = await fetch("/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            console.log("json is =>", json);
            setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            } catch (err) {
            console.error("Fetch failed:", err);
            }
        };

  useEffect(() => {
    fetchData();
  }, []);

  listOfRestaurants.map((res) =>
    {return console.log("resid is ", res.info.id)
  })

  return(
    <>
    <Header/>
    <div className="card-list">
        {listOfRestaurants.map((res)=>(
          <>
            <h3>{res.id}</h3>
               <Link to={"/restaurants/" + res.info.id} style = {{ textDecoration: "none"}}>
                <Card key={res.id} restaurants = {res}/></Link>
          </>

    ))}
    </div>
  
    </>
)};

export default MainComponent;

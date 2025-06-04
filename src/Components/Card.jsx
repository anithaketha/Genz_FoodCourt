
const Card = ({ restaurants }) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurants.info.cloudinaryImageId
        }
        alt="Restaurant"
        className="card-img"
      />
      <div className="card-content">
        <h2 className="restaurant-name">{restaurants.info.name}</h2>
        <p className="restaurant-area">{restaurants.info.areaName}</p>
        <p className="restaurant-details">
          ⭐ {restaurants.info.avgRating} • {restaurants.info.costForTwo}
        </p>
        <p className="restaurant-cuisines">
          {restaurants.info.cuisines?.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default Card;

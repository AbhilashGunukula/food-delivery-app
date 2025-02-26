import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();

    console.log(json);
    console.log("im here");
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <h1>Loading...</h1>;
  }

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
  const {
    name = "Unknown Restaurant",
    cuisines = [],
    costForTwoMessage = "",
  } = restaurantInfo;

  const { itemCards } =
    resInfo?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.[3].card
      ?.card || {};

  console.log(itemCards);

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

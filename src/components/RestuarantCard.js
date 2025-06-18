import { CDN_URl } from "../utils/constants";

const RestuarantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    sla,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URl + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestuarantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestuarantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;

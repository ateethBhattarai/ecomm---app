import React, { useState } from "react";
import { Heart } from "lucide-react";

const Cards = ({ price, itemName, image }) => {
  const [like, setLike] = useState(false);
  const likeItem = () => {
    setLike(!like);
  };
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
      <figure className=" h-40">
        <img src={image} alt="pickle" className="object-contain" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>
        <p className="font-serif">Rs.{price}</p>
        <div className="card-actions justify-end">
          <button className="btn" onClick={likeItem}>
            <Heart
              fill={like ? "red" : "none"}
              stroke-width={like ? "0.5" : "2"}
            />
          </button>
          <button className="btn ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

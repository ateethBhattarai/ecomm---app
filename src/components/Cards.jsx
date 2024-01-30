import { Heart } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ price, itemName, image, link, isLiked }) => {
  const [like, setLike] = useState(isLiked);
  const likeItem = () => {
    setLike(!like);
  };
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
      <Link to={link} className="focus:outline-none no-underline">
        <figure className="rounded-lg h-52">
          <img src={image} alt="pickle" className="object-contain" />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>
        <p className="font-serif">Rs.{price}</p>
        <div className="card-actions justify-end">
          <button className="btn" onClick={likeItem}>
            <Heart
              fill={like ? "red" : "none"}
              strokeWidth={like ? "1" : "2"}
            />
          </button>
          <button className="btn " data-theme="mytheme">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

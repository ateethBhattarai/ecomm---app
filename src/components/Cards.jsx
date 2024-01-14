import React from "react";

const Cards = ({ price, itemName }) => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>
        <p className="font-serif">Rs.{price}</p>
        <div className="card-actions justify-end">
          <button className="btn ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

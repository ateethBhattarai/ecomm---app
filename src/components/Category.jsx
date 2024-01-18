import React from "react";
import Cards from "./Cards";
import { cardNewarrivalsData, cardPopularData } from "../utils/data";

const Category = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered mb-10">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="New Arrivals"
      />
      <div role="tabpanel" className="tab-content bg-base-100  rounded-box p-6">
        <div className="flex flex-wrap gap-5 items-center justify-evenly">
          {cardNewarrivalsData.map((data, i) => (
            <Cards
              key={i}
              price={data.price + i + 1}
              itemName={data.itemName}
              image={data.img}
            />
          ))}
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Popular"
        checked
      />
      <div role="tabpanel" className="tab-content bg-base-100  rounded-box p-6">
        <div className="flex flex-wrap gap-5 items-center justify-evenly">
          {cardPopularData.map((data, i) => (
            <Cards
              key={i}
              price={data.price + i + 1}
              itemName={data.itemName}
              image={data.img}
            />
          ))}
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Favorite"
      />
      <div role="tabpanel" className="tab-content bg-base-100  rounded-box p-6">
        <div className="flex flex-wrap gap-5 items-center justify-evenly">
          {cardNewarrivalsData.map((data, i) => (
            <Cards
              key={i}
              price={data.price + i + 1}
              itemName={data.itemName}
              image={data.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

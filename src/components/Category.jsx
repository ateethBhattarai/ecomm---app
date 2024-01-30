import React, { useState } from "react";
import { cardData } from "../utils/data";
import Cards from "./Cards";

const Category = () => {
  const [paginateItemCount, setPaginateItemCount] = useState(5);

  const loadMore = () => {
    setPaginateItemCount(paginateItemCount + paginateItemCount);
  };

  return (
    <div role="tablist" className="tabs whitespace-nowrap tabs-bordered mb-10">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab mx-1"
        aria-label="New Arrivals"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-6">
        <div className="flex flex-wrap gap-5 items-center justify-evenly">
          {cardData.slice(0, paginateItemCount).map((data) => (
            <Cards
              key={data.id}
              price={data.price}
              itemName={data.itemName}
              image={data.img.cover}
              link={`/item/${data.id}`}
            />
          ))}
        </div>
        {paginateItemCount <= cardData.length ? (
          <div className="w-full my-3 text-center">
            <button
              className="btn rounded-lg"
              data-theme="mytheme"
              onClick={loadMore}
            >
              Load More
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab mx-1"
        aria-label="Favorite"
      />
      <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-6">
        <div className="flex flex-wrap gap-5 items-center justify-evenly">
          {cardData.map(
            (data) =>
              data.isLiked === true && (
                <Cards
                  key={data.id}
                  price={data.price}
                  itemName={data.itemName}
                  image={data.img.cover}
                  isLiked={data.isLiked}
                  link={`/item/${data.id}`}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;

{
  /* <div className="flex flex-wrap gap-5 items-center justify-evenly">
          {cardNewarrivalsData.map((data, i) => (
            <Cards
              key={i}
              price={data.price + i + 1}
              itemName={data.itemName}
              image={data.img}
            />
          ))}
        </div> */
}

{
  /* <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab mx-1"
        aria-label="Popular"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-6">
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
      </div> */
}

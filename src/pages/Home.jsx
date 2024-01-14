import React, { useState } from "react";
import { Carousel } from "../components";
import Cards from "../components/Cards";
import { cardData } from "../utils/data";

const Home = () => {
  const [paginateItemCount, setPaginateItemCount] = useState(5);

  const loadMore = () => {
    setPaginateItemCount(paginateItemCount + paginateItemCount);
  };
  return (
    <div>
      <Carousel />
      <div className="flex flex-wrap gap-5 items-center justify-evenly">
        {cardData.slice(0, paginateItemCount).map((data, i) => (
          <Cards
            key={i}
            price={data.price + i + 1}
            itemName={data.itemName}
            image={data.img}
          />
        ))}
      </div>
      {paginateItemCount <= cardData.length ? (
        <div className="w-full my-3 text-center">
          <button className="btn btn-primary rounded-lg" onClick={loadMore}>
            Load More
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;

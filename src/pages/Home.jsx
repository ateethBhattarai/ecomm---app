import React, { useState } from "react";
import { Carousel } from "../components";
import Cards from "../components/Cards";
import { cardData } from "../utils/data";
import { Link } from "react-router-dom";

const Home = () => {
  const [paginateItemCount, setPaginateItemCount] = useState(5);

  const loadMore = () => {
    setPaginateItemCount(paginateItemCount + paginateItemCount);
  };
  return (
    <div>
      <Carousel />
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

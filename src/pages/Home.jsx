import React, { useState } from "react";
import { Carousel, Category } from "../components";
import Cards from "../components/Cards";
import { cardData } from "../utils/data";

const Home = () => {
  const [paginateItemCount, setPaginateItemCount] = useState(5);

  const loadMore = () => {
    setPaginateItemCount(paginateItemCount + paginateItemCount);
  };
  return (
    <div>
      <Carousel className="mb-20" />
      <Category />
      <div className="flex flex-wrap gap-5 items-center justify-evenly">
        {cardData.slice(0, paginateItemCount).map((data, i) => (
          <Cards
            key={i}
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
  );
};

export default Home;

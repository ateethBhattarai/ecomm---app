import React, { useState } from "react";
import { Carousel, Category } from "../components";

const Home = () => {
  const [paginateItemCount, setPaginateItemCount] = useState(5);

  const loadMore = () => {
    setPaginateItemCount(paginateItemCount + paginateItemCount);
  };
  return (
    <div>
      <Carousel className="mb-20" />
      <Category />
    </div>
  );
};

export default Home;

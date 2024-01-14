import React from "react";
import { Carousel } from "../components";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="flex flex-wrap gap-5 items-center justify-start px-4">
        <Cards price={1200} itemName={"achar"} />
        <Cards price={1200} itemName={"achar"} />
        <Cards price={1200} itemName={"achar"} />
        <Cards price={1200} itemName={"achar"} />
        <Cards price={1200} itemName={"achar"} />
      </div>
    </div>
  );
};

export default Home;

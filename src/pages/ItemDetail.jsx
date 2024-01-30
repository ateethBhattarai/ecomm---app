import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cardData } from "../utils/data.js";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [showCaseImage, setShowCaseImage] = useState(null);

  useEffect(() => {
    const selectedItem = cardData.find((item) => item.id.toString() === id);
    setItem(selectedItem);
  }, [id]);

  return (
    <section className="flex flex-wrap max-sm:gap-4 justify-around p-2">
      <div className="flex flex-col gap-4 border-2 max-w-96 sm:min-w-96 items-center">
        <div className="border-2 p-0.5 max-h-[15rem] sm:min-w-[15rem] max-sm:h-[10rem] sm:h-[18rem] lg:h-[20rem] rounded-lg">
          <img
            src={showCaseImage ? showCaseImage : item?.img.cover}
            alt={item?.itemName}
            className="h-[100%] w-[100%]"
          />
        </div>
        <div className="h-16 gap-x-1 overflow-x-scroll noScrollbar max-w-96 flex mb-2">
          {item?.img.other.map((data, i) => (
            <div
              key={i}
              className="min-w-20 border-r flex items-center overflow-hidden justify-center hover:bg-gray-400 active:bg-gray-400 cursor-pointer"
              onClick={() => setShowCaseImage(item?.img.other[i])}
            >
              <img
                src={item?.img.other[i]}
                className="w-16"
                alt={item?.itemName}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-start lg:flex-1 p-2 ">
        {item && (
          <>
            <h1 className="text-4xl underline font-semibold text-center">
              {item.itemName}
            </h1>
            <p className="text-center text-xl my-3">Price: Rs. {item.price}</p>
            <p className="px-4 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              incidunt dolor velit officia? Saepe, aut animi. Ratione non,
              minus, eum qui blanditiis voluptatem incidunt modi magnam optio,
              possimus natus laboriosam molestiae quae dolorem odit. Officiis
              ducimus quisquam, impedit dicta veniam vitae perspiciatis, sit
              minima nam cum aliquam nulla voluptatum molestias qui dolore vero
              et? Architecto debitis perspiciatis iusto voluptatum mollitia
              possimus sit repellat. Repudiandae porro ea saepe eaque, qui
              architecto quaerat sed molestias officiis, recusandae veritatis.
              Atque nisi repellendus iusto at vero accusantium beatae sequi est
              quibusdam velit necessitatibus exercitationem error recusandae a,
              tempora dolores dicta? Voluptate mollitia quis molestias.
            </p>
          </>
        )}
        <div className="flex items-center justify-center gap-4 my-4">
          <button className="btn">
            {" "}
            {item?.isLiked ? "Remove from Favorite" : "Add as Favorite"}
          </button>
          <button className="btn">Add to Cart</button>
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;

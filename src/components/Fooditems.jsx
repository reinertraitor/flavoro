import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";

const Fooditems = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center lg:justify-start mx-8 my-10">
      {FoodData.map((food) => {
        return (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
          />
        );
      })}
    </div>
  );
};

export default Fooditems;

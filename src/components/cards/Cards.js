import React, { useState } from "react";
import Card from "../card/Card";

const Cards = ({ dresses }) => {
  return (
    <div className="row">
      {dresses.map((dress) => {
        return <Card key={dress.id} dress={dress} />;
      })}
    </div>
  );
};

export default Cards;

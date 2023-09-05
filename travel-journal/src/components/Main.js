import React from "react";
import Card from "./Card";
import CardData from "data";
export default function Main() {
  const cardData = CardData.map(
    places => {
      console.log(places);
    }
  );
return (
  <main>
    <Card />
  </main>
);
}

import React from "react";
import Card from "./Card";

export default function Main(getCardData) {

  const data = getCardData.cardData.map(
    places => {
       <Card
       img={places.imageUrl}
        title={places.title}
    location={places.location}
    googleMapsUrl={places.googleMapUrl}
    startDate={places.startDate}
    endDate={places.endDate}
    description={places.description}
        />;
    }
  );

return (
  <main>
   {data}
  </main>
);
}

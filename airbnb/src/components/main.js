import React from "react";
import Card from './card'
export default function Main() {
return (
  <>
    <section className="hero">
      <img className="hero--photo" src="./photo-grid.png" />
      <h1 className="hero--header">Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>

    <Card/>
  </>
);
}

import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/Navbar"
import Main from "./components/Main"

function Pages(){
  return (
    <>
      <NavBar />
      <Main/>
    </>
  );
}


export default function App() {
  /*
  1- Create a JSX Element (🚀)
  2- Find the Earth (🌍)
  3- Render the Rocket (🛰️)

  */

  // the rocket
  const jsxElement =  <Pages />

  // the earth
  const rootElement = document.getElementById("root");

  // land to the earth
  ReactDOM.render(jsxElement, rootElement);
}

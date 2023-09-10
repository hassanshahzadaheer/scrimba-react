import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Meme from "./components/Meme";

function Pages() {
  return (
    <>
    <Header/>
    <Meme/>
    </>
  );
}


export default function App() {
  const jsxElement = <Pages/>

  const root = document.getElementById("root");
  ReactDOM.createRoot(root).render(jsxElement);
}


const root = document.getElementById("root");
ReactDOM.render(<App />, root);

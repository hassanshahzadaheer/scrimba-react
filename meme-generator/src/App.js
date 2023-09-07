import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
function Pages() {
  return (
    <>
    <Header/>
    </>
  );
}


export default function App() {
  const jsxElement = <Pages/>

  const root = document.getElementById("root");
  ReactDOM.createRoot(root).render(jsxElement);
}

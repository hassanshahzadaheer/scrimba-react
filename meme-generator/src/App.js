import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Form from "./components/Form";

function Pages() {
  return (
    <>
    <Header/>
    <Form/>
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

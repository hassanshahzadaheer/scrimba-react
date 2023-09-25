import React from "react";
import  ReactDOM  from "react-dom/client";

function Profile({person}) {
  return (
    <>
    <h1>Your name is:  <span>{person.name}</span></h1>
    <p><strong>Country:</strong> {person.country} </p>
    </>
  );
}


function Pages () {
  const person = {
    name: "aheer",
    country: "Pakistan",
  };
  return (
    <>
      <div className="container">
        <div>
          <button  >Add Item</button>
        </div>

        <Profile person={person}/>
      </div>
    </>
  );
}

export default function App() {

  const jsxElement = <Pages />
  const root = document.getElementById('root');

  ReactDOM.createRoot(root).render(jsxElement);
}

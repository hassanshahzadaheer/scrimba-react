import React from "react";


export default function Joke (jokes){

    return (
      <>
        <h1>{jokes.setup}</h1>
        <p>{jokes.punchline}</p>
      </>
    );


}

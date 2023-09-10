import React  from "react";

export default function Meme (){
    return (
      <main>
        <div className="controllers">
          <input type="text" placeholder="Shut up" />
          <input type="text" placeholder="and take my money" />
        </div>
        <button className="form--button" type="submit" value="">
          Get a new meme image 🖼{" "}
        </button>

          <img className="meme--image" src="https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" />
      </main>
    );


}

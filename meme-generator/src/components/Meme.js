import React  from "react";
import memesData from "../memesData.js";
export default function Meme (){

  function getRandomImages(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  const [memeImage , setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");


  const generateMeme = () => {
    memesData.data.memes.map((data) => {
      const imageIndex = getRandomImages(0, memesData.data.memes.length - 1);
      let imageUrl = memesData.data.memes[imageIndex].url;

      setMemeImage(imageUrl);


    });
  };
  const overlay = () => {};

  return (
    <main>
      <div className="controllers">
        <input type="text" placeholder="Shut up" />
        <input type="text" placeholder="and take my money" />
      </div>
      <button
        className="form--button"
        onClick={generateMeme}
        type="submit"
        value=""
      >
        Get a new meme image 🖼
      </button>

      <img
        className="meme--image"
        onMouseOver={overlay}
        src={memeImage}
        alt="Meme"
      />
    </main>
  );
}

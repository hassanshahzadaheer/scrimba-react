import React  from "react";
import memesData from "../memesData.js";
export default function Meme (){
  /**
   * Challenge: Get a random image from the `memesData` array
   * when the "new meme image" button is clicked.
   *
   * Log the URL of the image to the console. (Don't worry
   * about displaying the image yet)
   */

  function getRandomImages(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
let imageUrl;
  const generateMeme = () => {
    memesData.data.memes.map((data) => {

       const imageIndex = getRandomImages(0, memesData.data.memes.length - 1);
      imageUrl = memesData.data.memes[imageIndex].url;
    });


  };
  console.log(imageUrl);
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
        src="https://media.gq.com.mx/photos/5be9c20dba170c07d7cfc9b3/master/w_1600%2Cc_limit/los_memes_te_estan_haciendo_gordo_2638.jpg"
        alt="Meme"
      />
    </main>
  );
}

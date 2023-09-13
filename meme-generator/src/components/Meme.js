import React  from "react";
import memesData from "../memesData.js";
export default function Meme (){
  /**
   * Challenge: Save the random meme URL in state
   * - Create new state called `memeImage` with an
   *   empty string as default
   * - When the getMemeImage function is called, update
   *   the `memeImage` state to be the random chosen
   *   image URL
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
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

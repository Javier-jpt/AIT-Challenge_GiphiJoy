import React, { useEffect, useState } from "react";
import GifUsers from "../gifUsers/gifUsers";
import { getGifsByGenreApi } from "../../api/gif.api";

function GifEntertainment() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifsByGenreApi("Entertainment").then((result) => {
      if ((result.status = 200)) {
        setGifs(result.gifs);
      }
    });
  }, []);

  return (
    <div className="entertainment-container">
      {gifs?.map((gif, index) => {
        return <GifUsers gif={gif} key={index} />;
      })}
    </div>
  );
}

export default GifEntertainment;
import React, { useEffect, useState } from "react";
import GifUsers from "../gifUsers/gifUsers";
import { getGifsByGenreApi } from "../../api/gif.api";

function GifReactions() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifsByGenreApi("Reactions").then((result) => {
      if ((result.status = 200)) {
        setGifs(result.gifs);
      }
    });
  }, []);

  return (
    <div className="reactions-container">
      {gifs?.map((gif, index) => {
        return <GifUsers gif={gif} key={index} />;
      })}
    </div>
  );
}

export default GifReactions;
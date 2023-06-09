import React, { useEffect, useState } from "react";
import GifUsers from "../gifUsers/gifUsers";
import { getGifsByGenreApi } from "../../api/gif.api";
import "./gifReactions.css"

function GifReactions() {
  
  const [gifs, setGifs] = useState([]);
  const [haveToReload, setHaveToReload] = useState(false);

  useEffect(() => {
    getGifsByGenreApi("Reaction").then((result) => {
      if ((result.status = 200)) {
        setGifs(result.gifs);
      }
    });
  }, [haveToReload]);

  return (
    <div className="reactions-container">
      {gifs?.map((gif, index) => {
        return <GifUsers gif={gif} key={index} setHaveToReload={setHaveToReload}/>;
      })}
    </div>
  );
}

export default GifReactions;
import React, { useEffect, useState } from "react";
import GifUsers from "../gifUsers/gifUsers";
import { getGifsByGenreApi } from "../../api/gif.api";
import "./gifEntertainment.css"

function GifEntertainment() {
  const [gifs, setGifs] = useState([]);
  const [haveToReload, setHaveToReload] = useState(false);

  useEffect(() => {
    getGifsByGenreApi("Entertainment").then((result) => {
      if ((result.status = 200)) {
        setGifs(result.gifs);
      }
    });
  }, [haveToReload]);

  return (
    <div className="entertainment-container">
      {gifs?.map((gif, index) => {
        return <GifUsers gif={gif} key={index} setHaveToReload={setHaveToReload} />;
      })}
    </div>
  );
}

export default GifEntertainment;
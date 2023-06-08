import React, { useEffect, useState } from "react";
import GifUsers from "../gifUsers/gifUsers";
import { getGifsByGenreApi } from "../../api/gif.api";
import "./gifTrending.css"

function GifTrending() {
  const [gifs, setGifs] = useState([]);
  const [haveToReload, setHaveToReload] = useState(false);

  useEffect(() => {
    getGifsByGenreApi("Trending").then((result) => {
      if ((result.status = 200)) {
        setGifs(result.gifs);
      }
    });
  }, [haveToReload]);

  return (
    <div className="trending-containers">
      {gifs?.map((gif, index) => {
        return <GifUsers gif={gif} key={index} setHaveToReload={setHaveToReload} />;
      })}
    </div>
  );
}

export default GifTrending;

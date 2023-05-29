import React from "react";
import "./memesGiphySection.css";

const MemesGiphySection = ({ giphysArray }) => {
  const getGiphy = () => {
    let randomIndex = Math.floor(Math.random() * 30);
    let randomGiphy = giphysArray[randomIndex];

    if (randomGiphy) {
      return randomGiphy;
    }
  };
  const GiphyTile = ({ giphy }) => {
    let giphyURL = giphy ? giphy.images.downsized.url : "";
    return (
      <div className="tile">
        <div className="giphy-tile">
        <div className="text-tile">
          <p>{giphy?.title}</p>
        </div>
          <img src={giphyURL} alt="giphy" />
        </div>
      </div>
    );
  };

  const gridGiphysConfig = [
    ["landscape-left-row", 3],
    ["landscape-right-row", 3],
    ["no-landscape-row", 4],
    ["landscape-middle-row", 3],
    ["no-landscape-row", 4],
  ]

  const createTiles = (numTiles) => {
    let tiles = [];
    for (let i = 0; i < numTiles; i++) {
      tiles.push(<GiphyTile giphy={getGiphy()} key={i} />);
    }
    return tiles;
  };

  return (
    <div className="stories-section">
    {gridGiphysConfig.map(([layoutClass, numTiles], index) => {
      const tiles = createTiles(numTiles);
      return (
        <div className={layoutClass} key={index}>
        {tiles}
        </div>
      )
    })}
    </div>
  )
};

export default MemesGiphySection;

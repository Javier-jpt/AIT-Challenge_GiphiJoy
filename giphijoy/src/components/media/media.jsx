import React, { useEffect, useState } from "react";
import "./media.css";
import { fetchTrendingGiphys } from "../../api/giphyApi";
import TrendingGiphy from "../trendingGiphy/trendingGiphy";

const Media = () => {
  const [trending, setTrending] = useState([]);

  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() -0.5);
  }

  const getTrendingGiphys = async () => {
    const trending = await fetchTrendingGiphys();
    setTrending(randomizeData(trending.data));
  }

  useEffect(() => {
    getTrendingGiphys();
  }, []);

  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
        <img src="/image/trending.svg" alt="Trending" />
          <h1>Trending</h1>
        </div>
        <div className="trending-container">
        {trending?.map((trendingGiphy, index) => {
          return <TrendingGiphy giphy={trendingGiphy} key={index} />
        })}
        </div>
      </div>
      <div className="row">
        <div className="row-header">
        <img src="/image/artists.svg" alt="Artists" />
          <h1>Artists</h1>
        </div>
        <div className="artists-container">
        <p>Content</p>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
        <img src="/image/clips.svg" alt="Clips" />
          <h1>Clips</h1>
        </div>
        <div className="clips-container">
        <p>Content</p>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
        <img src="/image/stories.svg" alt="Stories" />
          <h1>Stories</h1>
        </div>
        <div className="stories-container">
        <p>Content</p>
        </div>
      </div>
    </div>
  );
};

export default Media;

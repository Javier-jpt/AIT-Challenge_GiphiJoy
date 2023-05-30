import React, { useEffect, useState } from "react";
import "./home.css";
import { fetchSearchedGiphys, fetchTrendingGiphys } from "../../api/giphyApi";
import giphyArtists from "../../artists";
import TrendingGiphy from "../trendingGiphy/trendingGiphy";
import PsychedelicGiphy from "../psychedelicGiphy/psychedelicGiphy";
import ShortGiphySection from "../shortGiphySection/shortGiphySection";
import MemesGiphySection from "../memesGiphySection/memesGiphySection";


const Media = () => {
  const [trending, setTrending] = useState([]);
  const [artists, setArtists] = useState([]);
  const [clips, setClips] = useState([]);
  const [stories, setStories] = useState([]);

  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  };

  const getTrendingGiphys = async () => {
    const trending = await fetchTrendingGiphys();
    setTrending(randomizeData(trending.data));
  };

  const getArtists = async () => {
    const artists = await Promise.all(
      giphyArtists.map((giphyArtist) => {
        return fetchSearchedGiphys(giphyArtist).then((res) => res.data.data);
      })
    );
    setArtists(artists.flat());
  };

  const getSearchedGiphys = async (query, setState) => {
    const searched = await fetchSearchedGiphys(query);
    setState(randomizeData(searched.data));
  };

  useEffect(() => {
    getTrendingGiphys();
    getArtists();
    getSearchedGiphys("coffee", setClips);
    getSearchedGiphys("pose", setStories);
  }, []);

  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
          <img src="/image/trending.svg" alt="Trending" />
          <h1>Trending GiF</h1>
        </div>
        <div className="trending-container">
          {trending?.map((trendingGiphy, index) => {
            return <TrendingGiphy giphy={trendingGiphy} key={index} />;
          })}
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/image/Psychedelic.svg" alt="Psychedelic" />
          <h1>Psychedelic GiF</h1>
        </div>
        <div className="artists-container">
          {artists.map((artistGiphy, index) => {
            return <PsychedelicGiphy giphy={artistGiphy} key={index} />;
          })}
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/image/Short.svg" alt="Short" />
          <h1>Short GiF</h1>
        </div>
        <div className="clips-container">
          <ShortGiphySection giphysArray={clips} />
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/image/Memes.svg" alt="Memes" />
          <h1>Memes GiF</h1>
        </div>
        <div className="stories-container">
          <MemesGiphySection giphysArray={stories} />
        </div>
      </div>
    </div>
  );
};

export default Media;

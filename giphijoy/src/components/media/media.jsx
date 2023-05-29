import React, { useEffect, useState } from "react";
import "./media.css";
import { fetchSearchedGiphys, fetchTrendingGiphys } from "../../api/giphyApi";
import giphyArtists from "../../artists";
import TrendingGiphy from "../trendingGiphy/trendingGiphy";
import ArtistGiphy from "../artistGiphy/artistGiphy";
import ClipsGiphySection from "../clipsGiphySection/clipsGiphySection";
import StoriesGiphySection from "../storiesGiphySection/storiesGiphySection";

const Media = () => {
  const [trending, setTrending] = useState([]);
  const [artists, setArtists] = useState([]);
  const [clips, setClips] = useState([]);
  const [stories, setStories] = useState ([]);


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
  }

  useEffect(() => {
    getTrendingGiphys();
    getArtists();
    getSearchedGiphys("coffee", setClips);
    getSearchedGiphys("pose", setStories)
  }, []);

console.log(clips, 'clips');

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
          <img src="/image/artists.svg" alt="Artists" />
          <h1>Psychedelic GiF</h1>
        </div>
        <div className="artists-container">
          {artists.map((artistGiphy, index) => {
            return <ArtistGiphy giphy={artistGiphy} key={index} />;
          })}
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/image/clips.svg" alt="Clips" />
          <h1>Short GiF</h1>
        </div>
        <div className="clips-container">
          <ClipsGiphySection giphysArray={clips} />
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/image/stories.svg" alt="Stories" />
          <h1>Memes GiF</h1>
        </div>
        <div className="stories-container">
          <StoriesGiphySection giphysArray={stories} />
        </div>
      </div>
    </div>
  );
};

export default Media;

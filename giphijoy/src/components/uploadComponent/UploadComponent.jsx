import React, { useState } from "react";
import "./uploadComponent.css";
import { postGifApi } from "../../api/gif.api";

export const UploadComponent = () => {

  const [gifName, setGifName] = useState(null);
  const [gifUrl, setGifUrl] = useState(null);
  const [gifGenre, setGifGenre] = useState(null);

  const selectChange = (e) => {
    setGifGenre(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postGifApi(gifName, gifUrl, gifGenre)
   }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-name">
        <label htmlFor="name">Gif Name: </label>
        <input placeholder="   Put the name here" onChange={(e) => setGifName(e.target.value)}
          id="name"
          name="name"
          type="text"
          /* value={} */
        />
      </div>
      <div className="form-image">
        <label htmlFor="imageUrl">Gif Url: </label>
        <input placeholder="   Put the url here" onChange={(e) => setGifUrl(e.target.value)}
          id="imageUrl"
          name="imageUrl"
          type="text"
          /* value={} */
        />
      </div>
      <div className="form-genre">
      <select name="genre" className="genre-select" onChange={selectChange}> 
        <option value=""> --Please choose the Genre--
        </option>
        <option value="Reactions">Reactions</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Trending">Trending</option>
      </select>
      </div>
      <div className="form-btn">
        <button className="btn-style" type="submit" >Upload</button>
      </div>
    </form>
  );
};

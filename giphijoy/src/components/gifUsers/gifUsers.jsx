import React from "react";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import "./gifUsers.css";
import { deleteGifByIdApi } from "../../api/gif.api";
import toast from 'react-hot-toast';

function GifUsers({ gif, setHaveToReload }) {

  const handleDelete = async (e) => {
    await deleteGifByIdApi(gif._id)
    setHaveToReload(true)
    toast.error("Gif deleted correctly !!")
  }

  return (
    <div className="users-giphy">
      <img src={gif.imageUrl} alt={gif.name}/>
      <div className="users-info">
        <span> {gif.name} </span>
        <div className="users-icons">
          <span className="users-edit"> <AiFillEdit size={30} color="yellow"/> </span>
          <span className="users-delete" onClick={handleDelete}> <AiFillDelete size={30} color="red"/> </span>
        </div>
      </div>  
    </div>
  );
}

export default GifUsers;

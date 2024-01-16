import React, { useState } from "react";

function ToyCard({ toy, updateToys, toyList }) {
  const [likes, setLikes] = useState(toy.likes)

  function handleDelete(){
    const updatedToys= toyList.filter(toyItem => toyItem.id !== toy.id)
    updateToys(updatedToys)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE'
    })
  }

  function handleLikes(){
    const newLikes = likes + 1;
    setLikes(newLikes)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({likes: newLikes})
    })
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

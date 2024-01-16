import React, { useState } from "react";

function ToyForm({ updateToys, toyList }) {
  const [newToy, setNewToy] = useState({
    name: "",
    likes: 0,
    image: ""
  })

  function handleNewToy(e){
    e.preventDefault();
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newToy)})
        .then(resp => resp.json())
        .then(data => updateToys([...toyList, data]))
  }
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleNewToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange = {(e) => setNewToy({...newToy, name: e.target.value})}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange = {(e) => setNewToy({...newToy, image: e.target.value})}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

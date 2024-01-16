import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, updateToys }) {
  return (
    <div id="toy-collection">{toys.map(toy => (
      <ToyCard key={toy.id} toy={toy} updateToys={updateToys} toyList={toys}/>
    ))}</div>
  );
}

export default ToyContainer;

import React from "react";
import "./Detail.style.css"

const Detail = (props) => {
  const { match, birdsData } = props;
  const bird = birdsData.find(bird => bird.name === match.params.name)
  return (
    <div className="detail-container">
      <h1>{bird.name}</h1>
      <img src={bird.image} alt={bird.name} />
      <p>{bird.conservationStatus}</p>
      <a href={bird.homepage}><button>More</button></a>
    </div>
  )
}

export default Detail;
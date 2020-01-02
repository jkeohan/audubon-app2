import React from "react";
import "./Detail.style.css"

const Detail = (props) => {
  const { match, birdsData } = props;
  const bird = birdsData.find(bird => bird.name === match.params.name)
  return (
    <div className="detail-container">
      <section className="image">
        <img src={bird.image} alt={bird.name} />
      </section>
      <section className="info">
        <h1>{bird.name}</h1>
        <strong>conservation Status</strong> <br />
        <p>{bird.conservationStatus}</p>
        <a href={bird.homepage}><button>More</button></a>
      </section>
    </div>
  )
}

export default Detail;
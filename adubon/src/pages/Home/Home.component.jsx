import React from "react";
import "./Home.style.css";
import { Link } from "react-router-dom";

const Home = (props) => (
  <div className="container">
    {props.birdsData.map(e => (
      <Link to={`/detail/${e.name}`} key={e.name}>
        <div className="each-home-bird">
          {/* <img src={e.image}/> */}
          <div className="img" style={{ backgroundImage: `url(${e.image})` }}>
          </div>
          <h1>{e.name}</h1>
        </div>
      </Link>
    ))}
  </div>)

export default Home;

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import Populor from "./Populor";
import TopRated from "./TopRated";
import UpComing from "./UpComing";

const Home = () => {
  const [myData, setMyData] = useState([]);
  async function getApiData() {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=595d5d7d15770163a30a4a6b1eb500b8"
      );
      setMyData(res.data.results);
      console.log(res.data.results);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getApiData();
  }, []);
  
  return (
    <>
      <div className="carousel">
        <Carousel
          showThumbs={true}
          autoPlay={true}
          transitionTime={1}
          infiniteLoop={true}
          showStatus={false}
        >
          {myData.map((currElem) => {
            const {
              id,
              backdrop_path,
              title,
              release_date,
              vote_average,
              overview,
            } = currElem;
            return (
              <div className="carousel-poster" key={id}>
                <div className="posterImg">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    alt={id}
                  />
                </div>
                <div className="carousel_poster_overlay">
                  <h1>{title}</h1>
                  <h3>
                    {release_date}
                    <span>
                      {vote_average} <i className="fa-solid fa-star"></i>
                    </span>
                  </h3>
                  <p>{overview}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <Populor />
      <TopRated />
      <UpComing />

    </>
  );
};

export default Home;

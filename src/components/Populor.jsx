import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Populor = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getApiData() {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=595d5d7d15770163a30a4a6b1eb500b8"
      );
      setMyData(res.data.results);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      <div className="populor">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="intro">Populor</h3>
            </div>
          </div>
          <div className="row g-1">
            {myData.map((curElem,index) => {
              const { id, poster_path, title, overview } = curElem;
              return (
                <>
                  {loading ? (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton duration={2} />
                    </SkeletonTheme>
                  ) : (
                    <div className="col-6 col-sm-3 col-lg-2" key={id}>
                      <div className="card">
                        <img
                        className="img-fluid"
                          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                          alt={id}
                        />
                        <div className="overlay">
                          <h4>{title}</h4>
                          <p>{overview.slice(0, 118) + "..."}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Populor;

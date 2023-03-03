import axios from "axios";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { Es, Gb } from "react-flags-select";
import "../styles/detalle.css";

function Detail() {
  const [movieData, setMovieData] = useState(null);

  //To obtain the movie ID
  const token = sessionStorage.getItem("token");
  const query = window.location.search;
  const movieID = new URLSearchParams(query).get("movieID");

  //API endpoint
  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=8e6c26173742a6f1dd7865c6f7ccf11d&append_to_response=person`;

  useEffect(() => {
    axios.get(url).then((resp) => setMovieData(resp.data));
  }, [url]);

  return (
    <>
      {!token && <Navigate to="/" />}
      {movieData && (
        <div className="container_row">
          <Col className="container_poster">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt="movie_image"
            />
          </Col>
          <Col className="container_movieDetails">
            <h1 className="movie_title">{movieData.title}</h1>
            <i className="flag flag-us"></i>
            <p className="movie_overview">{movieData.overview}</p>
            <div className="container_genres">
              <h4 className="title_genre">Genre</h4>
              <ul className="list_genres">
                {movieData.genres.map((genre) => (
                  <li key={genre.id} className="genre">
                    |<span className="genre_text">{genre.name}</span>|{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="container_popularity">
              <h4 className="title_popularity"> Popularity</h4>
              <div className="popularity_container">
                <h6 className="popularity_percentage">
                  {(movieData.vote_average * 10).toString().substring(0, 2)}%
                </h6>
              </div>
            </div>
            <div className="container_language">
              <h4 className="title_language">Language</h4>
              <ul className="flagLanguage">
                {movieData.spoken_languages.map((lang, idx) => (
                  <li key={idx} className="menu-flags">
                    {lang.english_name === "English" && <Gb />}
                    {lang.english_name === "Spanish" && <Es />}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </div>
      )}
    </>
  );
}

export default Detail;

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import swal from "@sweetalert/with-react";
import axios from "axios";

//Components
import ButtonMoreInfo from "./ButtonMoreInfo";
import Loader from "./Loader";
import FavIcon from "./FavIcon";

//Styles
import "../styles/listado.css";
import Header from "./Header";

function ListOfMovies({ addFavs }) {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState();
  const [movieGenre, setMovieGenre] = useState([]);
  const [genreSelected, setGenreSelected] = useState();
  const [arrayOfGenres, setArrayOfGenres] = useState([]);

  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=8e6c26173742a6f1dd7865c6f7ccf11d&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((resp) => setMovieData(resp.data.results))
      .catch((err) =>
        swal(
          <div>
            <h2>{err.message}</h2>
            <h4>Please, try again later</h4>
          </div>
        )
      );
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=8e6c26173742a6f1dd7865c6f7ccf11d`;
    axios.get(url).then((resp) => setMovieGenre(resp.data.genres));
    // setArrayOfGenres(movieData.map((idGenre) => idGenre.genre_ids));
  }, [movieData]);

  function selectGenre() {
    const select = document.getElementById("genreSelect");
    const optionGenreName = select.options[select.selectedIndex].value;
    const optionGenreId = select.options[select.selectedIndex].id;
    setGenreSelected(optionGenreId);
    const ids = movieData.map((el) => el.genre_ids);
    console.log(movieData);
  }

  return (
    // If the token is not in the sessionStorage, the site will redirect to the path "/"
    <>
      {/* {!token && <Navigate to="/" />} */}

      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Container style={{ display: "flex" }}>
            <Row>
              Filter by genre:
              <Form.Select
                id="genreSelect"
                size="sm"
                // aria-label="Default select example"
                onChange={selectGenre}
              >
                <option>Click to select the genre</option>
                {movieGenre.map((idGenre, idx) => (
                  <option key={idx} value={idGenre.name} id={idGenre.id}>
                    {idGenre.name}
                  </option>
                ))}
              </Form.Select>
            </Row>
            <Row>
              {movieData.map((movie, idx) => (
                <Col key={idx}>
                  <Card
                    style={{
                      width: "18rem",
                      marginTop: "20px",
                      boxShadow: "0px 0px 6px",
                      border: "none",
                    }}
                    id="cardContainer"
                  >
                    <FavIcon id={movie.id} addFavs={addFavs} />
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                    <Card.Body style={{ backgroundColor: "#EBE8E7" }}>
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Text>
                        {movie.overview.substring(0, 75)}...
                      </Card.Text>
                      <Link
                        to={`/detail?movieID=${movie.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <ButtonMoreInfo />
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default ListOfMovies;

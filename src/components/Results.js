import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import swal from "@sweetalert/with-react";
import ButtonMoreInfo from "./ButtonMoreInfo";

function Results() {
  const [movieResults, setMovieResults] = useState([]);

  //query string from URL
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    let URL = `https://api.themoviedb.org/3/search/movie?api_key=8e6c26173742a6f1dd7865c6f7ccf11d&language=es-ES&query=${keyword}`;
    axios
      .get(URL)
      .then((resp) => {
        const moviesArray = resp.data.results;
        setMovieResults(moviesArray);
        if (moviesArray.length === 0) {
          swal(<h3>Your search has no results</h3>);
        }
      })
      .catch((error) => {
        swal("SEARCH ERROR");
      });
  }, [keyword]);

  return (
    <>
      <h2>
       Your search: <em>{keyword}</em>
      </h2>
      {movieResults.length === 0 && <h3>Sorry, there are no movies for your search</h3>}
      <Container style={{ display: "flex" }}>
        <Row>
          {movieResults.map((movie, idx) => (
            <Col key={idx}>
              <Card style={{ width: "18rem", marginTop: "20px" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview.substring(0, 75)}...</Card.Text>
                  <Link to={`/detail?movieID=${movie.id}`}>
                  <ButtonMoreInfo/>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Results;

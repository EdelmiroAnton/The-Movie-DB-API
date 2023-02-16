import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import swal from "@sweetalert/with-react";

function Resultados() {
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
          swal(<h3>Su busqueda no arrojó ningun resultado</h3>);
        }
      })
      .catch((error) => {
        swal("ERROR AL CARGAR LA BUSQUEDA");
      });
  }, [keyword]);

  return (
    <>
      <h2>
        Resultados de la búsqueda: <em>{keyword}</em>
      </h2>
      {movieResults.length === 0 && <h3>No hay resultados en tu busqueda</h3>}
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
                  <Link to={`/detalle?movieID=${movie.id}`}>
                    <Button variant="primary">Go somewhere</Button>
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
export default Resultados;

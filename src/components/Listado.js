import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import swal from "@sweetalert/with-react";
import axios from "axios";
import Loader from "./Loader";

function Listado() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState();

  // // If the token is not in the localStorage, the site will redirect to the path "/"
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=8e6c26173742a6f1dd7865c6f7ccf11d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

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
    }, 1500);
  }, []);
  console.log(movieData);

  let token = sessionStorage.getItem("token");

  return (
    <>
      {!token && <Navigate to="/" />}

      {loading ? (
        <Loader />
      ) : (
        <Container style={{ display: "flex" }}>
          <Row>
            {movieData.map((movie, idx) => (
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
      )}
    </>
  );
}

export default Listado;
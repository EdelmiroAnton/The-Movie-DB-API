//React
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//Components
import ButtonMoreInfo from "./ButtonMoreInfo";

//Styles
import "../styles/favorites.css";
import RemoveFavs from "./RemoveFavs";

function Favorites({ favorites, setFavorites }) {
  useEffect(() => {
    const favsItems = localStorage.getItem("favs");
    if (favsItems !== null) {
      setFavorites(JSON.parse(favsItems));
    }
  }, [setFavorites]);

  const removeFavs = (e) => {
    const btnRemove = e.currentTarget;
    const movieIdDataset = btnRemove.dataset.movieId;

    const newArr = favorites.filter((movie) => movie.id !== movieIdDataset);
    setFavorites(newArr);
    localStorage.setItem("favs", JSON.stringify(newArr));
  };
  return (
    <>
      {favorites.length === 0 && (
        <>
          <h1 className="textEmptyFavs">📽️ Ups, your Fav List is empty 📽️</h1>
          <Link to={"/listado"} className="goBackLink">
            Go back
          </Link>
        </>
      )}
      <Container style={{ display: "flex" }}>
        <Row>
          {favorites.map((movie, idx) => (
            <Col key={idx}>
              <Card
                style={{ width: "18rem", marginTop: "20px" }}
                id="cardContainer"
              >
                <RemoveFavs removeFavs={removeFavs} id={movie.id}/>
                <Card.Img variant="top" src={movie.srcImg} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview.substring(0, 75)}...</Card.Text>
                  <Link
                    to={`/detalle?movieID=${movie.id}`}
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
  );
}

export default Favorites;

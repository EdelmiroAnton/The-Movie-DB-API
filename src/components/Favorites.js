//React
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Components
import ButtonMoreInfo from "./ButtonMoreInfo";
import RemoveFavs from "./RemoveFavs";

//Styles
import "../styles/favorites.css";

function Favorites({ favorites, setFavorites }) {
  const navigate = useNavigate();

  // If the token is not in the sessionStorage, the site will redirect to the path "/"
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

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
        <div className="container_textEmptyFavs">
          <h1 className="textEmptyFavs">📽️ Ups, your Fav List is empty 📽️</h1>
          <Link to={"/movies"} className="goBackLink">
            Go back
          </Link>
        </div>
      )}
      <Container style={{ display: "flex" }}>
        <Row>
          {favorites.map((movie, idx) => (
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
                <RemoveFavs removeFavs={removeFavs} id={movie.id} />
                <Card.Img variant="top" src={movie.srcImg} />
                <Card.Body style={{ backgroundColor: "#EBE8E7" }}>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview.substring(0, 75)}...</Card.Text>
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
  );
}

export default Favorites;

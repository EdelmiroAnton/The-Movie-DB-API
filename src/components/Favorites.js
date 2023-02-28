import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";

//Components
import ButtonMoreInfo from "./ButtonMoreInfo";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favsItems = localStorage.getItem("favs");
    if (favsItems !== null) {
      setFavorites(JSON.parse(favsItems))
    } else{
        swal("FAVS IS EMPTY")
    }
  }, []);

  return (
    <>
      <Container style={{ display: "flex" }}>
        <Row>
          {favorites.map((movie, idx) => (
            <Col key={idx}>
              <Card
                style={{ width: "18rem", marginTop: "20px" }}
                id="cardContainer"
              >
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

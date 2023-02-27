import Login from "./components/Login";
import Listado from "./components/Listado";
import Contacto from "./components/Contacto";
import Detalle from "./components/Detalle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resultados from "./components/Resultados";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const favsItems = localStorage.getItem("favs");
  let tempArrayOfMovies;

  if (favsItems === null) {
    tempArrayOfMovies = [];
  } else {
    tempArrayOfMovies = JSON.parse(favsItems);
  }

  const addOrRemoveFavs = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const srcImg = parent.querySelector("img").getAttribute("src");
    const movieTitle = parent
      .querySelector("div")
      .querySelector("div").textContent;
    const overview = parent.querySelector("div").querySelector("p").textContent;
    const movieData = {
      srcImg,
      movieTitle,
      overview,
      id: btn.dataset.movieId,
    };
    tempArrayOfMovies.push(movieData);
    console.log(tempArrayOfMovies);
    localStorage.setItem("favs", JSON.stringify(tempArrayOfMovies));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/listado"
          element={<Listado addOrRemoveFavs={addOrRemoveFavs} />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

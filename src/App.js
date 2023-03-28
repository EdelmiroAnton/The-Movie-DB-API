//Components
import Login from "./components/Login";
import ListOfMovies from "./components/ListOfMovies";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Results from "./components/Results";
import Favorites from "./components/Favorites";

//React
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//Styles
import "./App.css";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavs = (e) => {
    const favsItems = localStorage.getItem("favs");
    let tempArrayOfMovies;

    if (favsItems === null) {
      tempArrayOfMovies = [];
    } else {
      tempArrayOfMovies = JSON.parse(favsItems);
      setFavorites(tempArrayOfMovies);
    }

    // Get info about the movies with the btn event
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const srcImg = parent.querySelector("img").getAttribute("src");
    const movieTitle = parent
      .querySelector("div")
      .querySelector("div").textContent;
    const overview = parent.querySelector("div").querySelector("p").textContent;

    // Object with all the previuos information
    const movieData = {
      srcImg,
      movieTitle,
      overview,
      id: btn.dataset.movieId,
    };

    // Logic to add favs into the array and do not repeat movie if the user clicks more than once the fav button
    const uniqueMovie = tempArrayOfMovies.find(
      (movie) => movie.id === movieData.id
    );
    if (uniqueMovie === undefined) {
      tempArrayOfMovies.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempArrayOfMovies));
    }
  };

  return (
    <>
      <Header favorites={favorites} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movies" element={<ListOfMovies addFavs={addFavs} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/results" element={<Results addFavs={addFavs} />} />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} setFavorites={setFavorites} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

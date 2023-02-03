import { useState } from "react";
import fav from "../assets/fav.png";

function FavIcon({ id }) {
  const [favClicked, setFavClicked] = useState(false);

  const toggleFav = () => {
    setFavClicked(!favClicked);
  };

  return (
    <>
      <img
        id={id}
        src={fav}
        alt="fav_Icon"
        className={`favIcon ${favClicked && "favOn"}`}
        onClick={toggleFav}
      />
    </>
  );
}

export default FavIcon;

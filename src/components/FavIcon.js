import { useState } from "react";

function FavIcon({ id, addOrRemoveFavs }) {
  // const [favClicked, setFavClicked] = useState(false);

  // const toggleFav = () => {
  //   addOrRemoveFavs()
  //   setFavClicked(!favClicked);
  // };

  return (
    <>
      <button id={id} className={`favIcon`} onClick={addOrRemoveFavs}>
        ❤️
      </button>
    </>
  );
}

export default FavIcon;

function FavIcon({ id, addOrRemoveFavs }) {
  return (
    <>
      <button id={id} className={`favIcon`} onClick={addOrRemoveFavs} data-movie-id={id}>
        ❤️
      </button>
    </>
  );
}

export default FavIcon;

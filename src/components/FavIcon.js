function FavIcon({ id, addFavs }) {
  return (
    <>
      <button
        id={id}
        className={`favIcon`}
        onClick={addFavs}
        data-movie-id={id}
      >
        ❤️
      </button>
    </>
  );
}

export default FavIcon;

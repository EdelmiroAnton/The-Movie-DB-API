function FavIcon({ id, addOrRemoveFavs }) {
  return (
    <>
      <button id={id} className={`favIcon`} onClick={addOrRemoveFavs}>
        ❤️
      </button>
    </>
  );
}

export default FavIcon;

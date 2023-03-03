function RemoveFavs({ removeFavs, id }) {
  return (
    <button className={`favIcon`} onClick={removeFavs} data-movie-id={id}>
      ❌
    </button>
  );
}

export default RemoveFavs;

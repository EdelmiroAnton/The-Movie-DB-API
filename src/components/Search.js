import { Form, FormControl, Button } from "react-bootstrap";
import swal from "@sweetalert/with-react";
import "../styles/buscador.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";

function Search() {
  const navigate = useNavigate();

  // If the token is not in the sessionStorage, the site will redirect to the path "/"
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();
    if (keyword.length === 0) {
      swal(<h2>Please, type something</h2>);
    } else if (keyword.length < 3) {
      swal(<h2>There is no movie with a name too short :D</h2>);
    } else {
      e.target.keyword.value = "";
      navigate(`/results?keyword=${keyword}`);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="form mt-3 mb-3">
        <Form.Group>
          <Form.Label className="m-0">
            <FormControl
              className=" formInput"
              type="text"
              name="keyword"
              placeholder="Search a movie"
            ></FormControl>
          </Form.Label>
        </Form.Group>
        <Button type="submit" className="ms-4">
          Search
        </Button>
      </Form>
    </>
  );
}
export default Search;

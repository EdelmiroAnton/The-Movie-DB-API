import { Form, FormControl, Button } from "react-bootstrap";
import "../styles/buscador.css";

const handleSubmit = (e) => {
  e.preventDefault();
  const keyWord = e.target.keyword.value;
  console.log(keyWord);
};

function Buscador() {
  return (
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
      <Button variant="success" type="submit" className="ms-4">
        Search
      </Button>
    </Form>
  );
}
export default Buscador;

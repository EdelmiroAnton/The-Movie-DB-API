import { Form, FormControl, Button } from "react-bootstrap";

const handleSubmit = (e) => {
  e.preventDefault();
  const keyWord = e.target.keyword.value;
  console.log(keyWord);
};

function Buscador() {
  return (
    <Form onSubmit={handleSubmit} className="d-flex align-items-center">
      <Form.Group>
        <Form.Label className="m-0">
          <FormControl
            className="me-4"
            type="text"
            name="keyword"
            placeholder="Search a movie"
          ></FormControl>
        </Form.Label>
      </Form.Group>
      <Button variant="outline-success" type="submit" className="ml-2">
        Search
      </Button>
    </Form>
  );
}
export default Buscador;

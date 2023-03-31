import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  // FormControl,
  Form,
  // FormLabel,
  // FormGroup,
} from "react-bootstrap";

function Contact() {
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
  };

  return (
    <>
      <h1>CONTACT</h1>
      <Form>
        <Form.Group className="mb-3" controlId="form_name">
          {/* label */}
          <Form.Label>Name</Form.Label>
          {/* input  */}
          <Form.Control type="Name" placeholder="John Doe" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form_email">
          {/* label */}
          <Form.Label>Email address</Form.Label>
          {/* input  */}
          <Form.Control
            type="email"
            placeholder="John_doe@example.com"
            req="true"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form_phone">
          {/* label */}
          <Form.Label>Phone number</Form.Label>
          {/* input  */}
          <Form.Control type="number" placeholder="54-2324-697691" />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Contact;

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

  return (
    <>
      <h1>CONTACT</h1>
      <Form>
        <Form.Group className="mb-3" controlId="form_name">
          {/* label */}
          <Form.Label>Name</Form.Label>
          {/* input  */}
          <Form.Control
            type="Name"
            placeholder="Enter your name and last name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form_email">
          {/* label */}
          <Form.Label>Email address</Form.Label>
          {/* input  */}
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form_phone">
          {/* label */}
          <Form.Label>Phone number</Form.Label>
          {/* input  */}
          <Form.Control
            type="number"
            placeholder="Enter your telephone number"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default Contact;

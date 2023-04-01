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
    // e.preventDefault();
    console.log("lalala");
  };

  return (
    <>
      <h1>CONTACT</h1>
      <Form
        action="https://formsubmit.co/anton.edelmiro@gmail.com"
        method="POST"
        className="formContainer"
      >
        <Form.Group className="mb-3">
          <Form.Label for="name">Name</Form.Label>
          {/* input  */}
          <Form.Control
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label for="email">Email address</Form.Label>
          {/* input  */}
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="John_doe@example.com"
            req="true"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form_phone">
          <Form.Label>Phone number</Form.Label>
          {/* input  */}
          <Form.Control type="number" placeholder="54-2324-697691" />
        </Form.Group>
        <Form.Label>Leave us a message </Form.Label>

        <Form.Control
          as="textarea"
          placeholder="Leave a message or suggest us a movie to be uploaded"
        ></Form.Control>
        <input
          type="hidden"
          name="_autoresponse"
          value="Hey!👋 Thanks for fill the form, we've received your data correctly. Greetings! 😊"
        ></input>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Contact;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import "../styles/contact.css";

//Component
import Header from "./Header";

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
      <Header />
      <h1 className="title_contact">KEEP IN CONTACT</h1>
      <Form
        action="https://formsubmit.co/anton.edelmiro@gmail.com"
        method="POST"
        className="formContainer"
      >
        <Form.Group className="mb-3 form_group">
          <Form.Label for="name">Name</Form.Label>
          {/* input  */}
          <Form.Control type="text" name="name" id="name" placeholder="John" />
        </Form.Group>
        <Form.Group className="mb-3 form_group">
          <Form.Label for="lastName">Last Name</Form.Label>
          {/* input  */}
          <Form.Control
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Doe"
          />
        </Form.Group>

        <Form.Group className="mb-3 form_group">
          <Form.Label for="email">Email address</Form.Label>
          {/* input  */}
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="John_doe@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-3 form_group">
          <Form.Label for="phoneNumber">Phone number</Form.Label>
          {/* input  */}
          <Form.Control
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="54-2324-697691"
          />
        </Form.Group>

        <Form.Group className="mb-3 form_group">
          <Form.Label for="textarea">Leave us a message </Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Leave a message or suggest us a movie to be uploaded"
            className="textarea"
            id="textarea"
            name="textarea"
          ></Form.Control>
        </Form.Group>
        <input
          type="hidden"
          name="_autoresponse"
          value="Hey!👋 Thanks for fill the form, we've received your data correctly. Greetings! 😊"
        ></input>
        <Button type="submit" onClick={handleSubmit} className="button_submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Contact;

import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate, Navigate } from "react-router-dom";
import { Button, FormControl } from "react-bootstrap";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    //Form Validations
    if (email === "" || password === "") {
      swal("One or more fields are empty", "", "error");
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      swal(<h2>Incorrect email</h2>);
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      swal("Invalid credentials", "", "error");
      return;
    }

    swal(<h1>Welcome to the site!</h1>);

    //Post email and password with Axios
    const URL = "http://challenge-react.alkemy.org/";
    axios.post(URL, { email, password }).then((resp) => {
      const token = resp.data.token;
      sessionStorage.setItem("token", token);
      navigate("/movies");
    });
  };

  let token = sessionStorage.getItem("token");
  return (
    <>
      {token && <Navigate to="/movies" />}

      <form onSubmit={handleSubmit}>
        <div className="container_input">
          <label className="input_email">
            <span className="label_title">Email</span>
            <FormControl type="text" name="email"></FormControl>
          </label>
          <label className="input_password">
            <span className="label_title">Password</span>
            <FormControl type="password" name="password"></FormControl>
          </label>
        </div>
        <div className="container_button">
          <Button
            variant="outline-success"
            type="submit"
            className="button_logIn"
          >
            Log in here
          </Button>
        </div>
      </form>
    </>
  );
}

export default Login;

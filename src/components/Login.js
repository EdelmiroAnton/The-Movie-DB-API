//Google OAuth
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

//JWT
import jwt_decode from "jwt-decode";

// import axios from "axios";
// import { Button, FormControl } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import swal from "@sweetalert/with-react";
import "../styles/login.css";
import Header from "./Header";

function Login({ favorites }) {
  const navigate = useNavigate();

  // const navigate = useNavigate();
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   const regexEmail =
  //     /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  //   //Form Validations
  //   if (email === "" || password === "") {
  //     swal("One or more fields are empty", "", "error");
  //     return;
  //   }

  //   if (email !== "" && !regexEmail.test(email)) {
  //     swal(<h2>Incorrect email</h2>);
  //     return;
  //   }

  //   if (email !== "challenge@alkemy.org" || password !== "react") {
  //     swal("Invalid credentials", "", "error");
  //     return;
  //   }

  //   swal(<h1>Welcome to the site!</h1>);

  //   //Post email and password with Axios
  //   const URL = "http://challenge-react.alkemy.org/";
  //   axios.post(URL, { email, password }).then((resp) => {
  //     const token = resp.data.token;
  //     sessionStorage.setItem("token", token);
  //     navigate("/movies");
  //   });
  // };

  return (
    <>
      <GoogleOAuthProvider clientId="12366388808-nnci310k7b0k3hfje3so2ivpejtkma1s.apps.googleusercontent.com">
        <div className="loginContainer">
          <h1 className="login_title">Log in with Google</h1>
          <GoogleLogin
            className="googleBtn"
            onSuccess={(credentialResponse) => {
              let decoded = jwt_decode(credentialResponse.credential);
              swal({
                title: "Welcome!",
                text: "Login Success",
                icon: "success",
              });
              //Add token to sessionStorage.
              sessionStorage.setItem("token", decoded.jti);

              // When user logs in, automatically will be redirected to /movies
              if (decoded.jti) {
                navigate("/movies");
              }
            }}
            onError={() => {
              swal("Login Failed");
            }}
          />
        </div>
      </GoogleOAuthProvider>
      {sessionStorage.length === 1 && (
        <Header favorites={favorites} token={sessionStorage.getItem("token")} />
      )}
      {/* <form onSubmit={handleSubmit}>
        <div className="container_input">
          <label className="input_email">
            <span className="label_title">Email</span>
            <FormControl type="text" name="email" className="formControl_email"></FormControl>
          </label>
          <label className="input_password">
            <span className="label_title">Password</span>
            <FormControl type="password" name="password"></FormControl>
          </label>
        </div>
        <div className="container_button">
          <Button
            type="submit"
            className="button_logIn"
          >
            Log in here
          </Button>
        </div>
      </form> */}
    </>
  );
}

export default Login;

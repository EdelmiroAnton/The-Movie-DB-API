//Google OAuth
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

//JWT
import jwt_decode from "jwt-decode";

// import axios from "axios";
// import { Button, FormControl } from "react-bootstrap";

import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

import swal from "@sweetalert/with-react";
import "../styles/login.css";

function Login() {
  const [token, setToken] = useState("");
  sessionStorage.setItem("token", token);

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

  // let token = sessionStorage.getItem("token");

  return (
    <>
      {token && <Navigate to="/movies" />}
      <GoogleOAuthProvider clientId="12366388808-nnci310k7b0k3hfje3so2ivpejtkma1s.apps.googleusercontent.com">
        <div className="loginContainer">
          <h4 className="login_title">Log in with Google</h4>
          <GoogleLogin
            className="googleBtn"
            onSuccess={(credentialResponse) => {
              var decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded.jti);
              swal({
                title: "Welcome!",
                text: "Login Success",
                icon: "success",
              });
              setToken(decoded.jti);
            }}
            onError={() => {
              swal("Login Failed");
            }}
          />
        </div>
      </GoogleOAuthProvider>
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

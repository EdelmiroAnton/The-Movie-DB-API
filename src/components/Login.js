//Google OAuth
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

//JWT
import jwt_decode from "jwt-decode";

// import axios from "axios";
// import swal from "@sweetalert/with-react";

import { useNavigate, Navigate } from "react-router-dom";
// import { Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import "../styles/login.css";
import swal from "@sweetalert/with-react";

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
      <GoogleOAuthProvider clientId="882638153135-4k0p8tbg8b0mfn840aji96cq9fbed0qi.apps.googleusercontent.com">
        <GoogleLogin
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

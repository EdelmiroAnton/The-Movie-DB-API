import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    </>
  );
}

export default Contact;

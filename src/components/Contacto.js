import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Contacto() {
  const navigate = useNavigate();
  // If the token is not in the localStorage, the site will redirect to the path "/"
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <h1>CONTACTO</h1>
    </>
  );
}

export default Contacto;

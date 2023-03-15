import "../styles/footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <h3 className="footer_text">
          Copyright 2023 -{" "}
          <a
            href="https://github.com/EdelmiroAnton/"
            target={"_blank"}
            className="githubLink"
            rel="noreferrer"
          >
            {" "}
            Edelmiro Antón
          </a>
        </h3>
      </div>
    </>
  );
}
export default Footer;

import styles from "./style.module.css"

export const Footer = () => {
  return (
    <footer id="footer">
      <div className={styles["contacts-container"]}>
        <div className={styles["contact-item"]}>
          <i className="fa-solid fa-phone"></i>
          <h2 className={styles["social-text"]}>(11) 4184-8404</h2>
        </div>
        <div className={styles["contact-item"]}>
          <i className="fa-solid fa-envelope"></i>
          <h2 className={styles["social-text"]}>contatos@eddieflix.com</h2>
        </div>
        <div className={styles["contact-item"]}>
          <i className="fa-solid fa-location-dot"></i>
          <h2 className={styles["social-text"]}>Av. Francisco Pignatari, 650 - Vila Gustavo Correia</h2>
        </div>
      </div>
      <div className={styles["copyright"]}>
        <h2 className={styles["copyright-text"]}>Copyright © 2024 | Eddieflix</h2>
      </div>
      <div className={styles["social-container"]}>
        <a href="#">
          <div className={styles["social-item"]}>
            <i id={styles["social-icon"]} className="fa-brands fa-youtube"></i>
          </div>
        </a>
        <a href="#">
          <div className={styles["social-item"]}>
            <i id={styles["social-icon"]} className="fa-brands fa-x-twitter"></i>
          </div>
        </a>
        <a href="#">
          <div className={styles["social-item"]}>
            <i
              id={styles["social-icon"]}
              className="fa-brands fa-instagram"
            ></i>
          </div>
        </a>
        <a href="#">
          <div className={styles["social-item"]}>
            <i
              id={styles["social-icon"]}
              className="fa-brands fa-facebook-f"
            ></i>
          </div>
        </a>
      </div>
    </footer>
  );
};


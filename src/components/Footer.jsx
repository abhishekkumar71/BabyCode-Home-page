import styles from "../styles/pages.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.Footer}>
      <div className={styles.footerLinks}>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#login">Login</a>
        <a href="#signup">Signup</a>
      </div>

      <h5>&copy; {new Date().getFullYear()} IELTS Institute. All rights reserved.</h5>

      <div className={styles.iconContainer}>
        <a
          href="https://www.linkedin.com/in/abhishek-kumar5471/"
          className={styles.icons}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/abhishekkumar71" className={styles.icons}>
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.blogger.com/profile/11390721205359469828"
          className={styles.icons}
        >
          <i className="fa-brands fa-blogger"></i>
        </a>
      </div>

      <div>
        <p>Email: marsakatlaabhishek7168@gmail.com</p>
        <p>Phone: +91 6281512645</p>
      </div>
    </footer>
  );
}

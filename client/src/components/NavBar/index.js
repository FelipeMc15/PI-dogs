import { Link } from "react-router-dom";
import Logo from "../../img/logo-linkedin-icon-2048.png";
import LogoGH from "../../img/GitHub_logo.png";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div>
      <div>
        <h1>PI Dogs</h1>
        <a href="https://www.linkedin.com/in/luis-felipe-moraes-319ab21a9/">
          <img id="logo" src={Logo} alt="LinkedIn" className={styles.logo} />
        </a>
        <a href="https://github.com/FelipeMc15">
          <img id="logoGH" src={LogoGH} alt="Github" className={styles.logo} />
        </a>
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/add">
        <button>Create a Dog</button>
      </Link>
    </div>
  );
}

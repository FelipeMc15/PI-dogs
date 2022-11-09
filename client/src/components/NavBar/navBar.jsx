import { NavLink } from "react-router-dom";
import Logo from "../../img/logo-linkedin-icon-2048.png";
import LogoGH from "../../img/GitHub_logo.png";

export default function NavBar() {
  return (
    <div className="container_navBar">
      <h1>Dog Breeds</h1>
      <div className="socialMedias">
        <a href="https://www.linkedin.com/in/luis-felipe-morales-319ab21a9/">
          <img id="logo" src={Logo} alt="LinkedIn" className={"linkedin"} />
        </a>
        <a href="https://github.com/FelipeMc15">
          <img id="logoGH" src={LogoGH} alt="Github" className={"github"} />
        </a>
      </div>
      <nav className="navBar">
        <NavLink
          exact
          to="/home"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          <button>Home</button>
        </NavLink>
        <NavLink
          to="/home/add"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          <button>Create a Dog</button>
        </NavLink>
      </nav>
    </div>
  );
}

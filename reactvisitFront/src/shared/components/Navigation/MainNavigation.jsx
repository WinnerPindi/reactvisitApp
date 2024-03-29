import "./MainNavigation.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { MainHeader } from "./MainHeader";

export function MainNavigation(props) {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span/>
        <span/>
        <span/>
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlaces</Link>
      </h1>
      <nav>
        ...
      </nav>
    </MainHeader>
  );
}

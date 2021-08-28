import { NavLink } from "react-router-dom";
import styles from './styles.module.scss';
import { useLocation } from "react-router";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.navigation}>
      <NavLink
        exact
        to={{
          pathname: "/",
          state: {from: location}
        }}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        to={{
          pathname: "/movies",
          state: {from: location }
        }}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
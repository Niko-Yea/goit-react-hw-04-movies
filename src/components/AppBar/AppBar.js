import Navigation from "../Navigation/Navigation";
import styles from './styles.module.scss'

const AppBar = () => {
  return (
    <div className={styles.appBar}>
      <Navigation />
    </div>
  );
}

export default AppBar;
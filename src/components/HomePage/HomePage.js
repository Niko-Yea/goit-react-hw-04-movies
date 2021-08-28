import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchTrendingList } from '../../services/apiService';
import styles from './styles.module.scss'

const HomePage = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingList().then(setApiResponse)
  }, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Trending today</h2>
      <ul className={styles.movieList}>
        {apiResponse && apiResponse.results.map(movie => {
          return (
            <li className={styles.movieCard} key={movie.id}>
              <Link to={{
                pathname: `/movies/${movie.id}`,
                state: {from: location}
              }} className={styles.link}>
                <div className={styles.cardContainer}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt='qwe'
                    className={styles.cardImg}
                  />
                  <p className="cardTitle">{movie.title || movie.name}</p>
                </div>
              </Link>
            </li>
          ) 
        })}
      </ul>
    </div>
  );
}

export default HomePage;
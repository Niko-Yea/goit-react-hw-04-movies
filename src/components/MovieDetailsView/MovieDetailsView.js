import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory, useLocation } from "react-router";
import { fetchMovieById } from '../../services/apiService';
import AdditionalInformation from "../AdditionalInformation/AdditionalInformation";
import styles from './styles.module.scss'

const MovieDetailsView = () => {
  const [apiResponse, setApiResponse] = useState(null)
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieById(movieId).then(setApiResponse)
  }, [movieId])

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/')
  }

  return (apiResponse && (
    <>
      <button onClick={onGoBack} type='button'>Go Back</button>
      <div className={styles.movie}>
        <img
          src={`https://image.tmdb.org/t/p/w500${apiResponse.poster_path}`}
          alt='qwe'
          className={styles.poster}
        />
        <div className={styles.description}>
          <h2>{apiResponse.title} ({new Date(apiResponse.release_date).getFullYear()})</h2>
          <p className={styles.score}>User Score: {apiResponse.vote_average * 10}%</p>
          <h3 className={styles.title}>Overview</h3>
          <p>{apiResponse.overview}</p>
          <h3 className={styles.title}>Genres</h3>
          <ul className={styles.genres}>
            {apiResponse.genres.map(g => <li key={g.id} className={styles.genresItem}>{g.name}</li>)}
          </ul>
        </div>
      </div>

      <AdditionalInformation />
    </>
  )
  );
}
 
export default MovieDetailsView;
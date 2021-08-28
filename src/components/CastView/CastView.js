import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchCastById } from '../../services/apiService';
import styles from './styles.module.scss';

const CastView = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const { movieId } = useParams()

  useEffect(() => {
    fetchCastById(movieId).then(({ cast }) => {
      setApiResponse(cast.filter(cast => !cast.profile_path === false));
    });
  }, [movieId]);



  return (
    <ul className={styles.list}>
      {apiResponse && apiResponse.map(actor => {
        return (
          <li key={actor.id} className={styles.item}>
            <div className={styles.actorInfo}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.original_name}
                className={styles.cardImg}
              />
              <span>{actor.original_name}</span>
            </div>
          </li>)
      })}
    </ul>
  );
}
 
export default CastView;
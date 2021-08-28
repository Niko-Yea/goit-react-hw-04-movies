import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchReviews } from '../../services/apiService'
import styles from './styles.module.scss'

const ReviewsView = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const { movieId } = useParams()

  useEffect(() => {
    fetchReviews(movieId).then(setApiResponse)
  }, [movieId])

  if (apiResponse && apiResponse.results.length === 0) {
    return (
      <p>We don't have any reviews for this movie</p>
    )
  }

  return (
    <ul className={styles.list}>
      {apiResponse && apiResponse.results.map(review => {
        return (
          <li className={styles.item} key={review.id}>
              <h4>{review.author}</h4>
            <p className={styles.rev}>{review.content}</p>
          </li>
        )
      })}
    </ul>
  );
}
 
export default ReviewsView;
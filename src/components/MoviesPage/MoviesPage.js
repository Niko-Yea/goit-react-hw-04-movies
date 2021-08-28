import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { fetchSearchMovie } from '../../services/apiService';
import styles from './styles.module.scss'

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [apiResponse, setApiResponse] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      fetchSearchMovie(query).then(setApiResponse);
    }
  }, [query])

  function handleInputChange(e){
    setSearchQuery(e.currentTarget.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    
    fetchSearchMovie(searchQuery).then(setApiResponse);
    history.push({
      ...location,
      search: `query=${searchQuery}`
    })
  }


  return (
    <div className={styles.container}>
      <form onSubmit={formSubmitHandler}>
        <input
          onChange={handleInputChange}
          value={searchQuery}
          name='searchQuery'
          type='text'
        />
        <button type='submit'>Search</button>
      </form>

      <ul className={styles.movieList}>
        {apiResponse && apiResponse.results.map(result => {
          return (
            <li className={styles.movieCard} key={result.id}>
              <Link to={{
                pathname: `/movies/${result.id}`,
                state: {from: location}
              }} className={styles.link}>
                <div className={styles.cardContainer}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                    alt='qwe'
                    className={styles.cardImg}
                  />
                  <p className="cardTitle">{result.title || result.name}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default MoviesPage;
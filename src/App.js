import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import './normalize.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import AppBar from './components/AppBar/AppBar';
const HomePage = lazy(() => import('./components/HomePage/HomePage' /* webpackChunkName: "homePage" */ ));
const MovieDetailsView = lazy(() => import('./components/MovieDetailsView/MovieDetailsView' /* webpackChunkName: "details-view" */ ));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage' /* webpackChunkName: "moviesPage" */));
const NotFound = lazy(() => import('./components/NotFound/NotFound' /* webpackChunkName: "notFound" */));




function App() {
  return (
    <div>
      <AppBar />

      <Suspense fallback={<Loader type="ThreeDots" color="#3f51b5" height={40} width={40}/>}>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>

          <Route path='/movies' exact>
            <MoviesPage />
          </Route>

          <Route path='/movies/:movieId'>
            <MovieDetailsView />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

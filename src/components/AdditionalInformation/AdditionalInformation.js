import { lazy, Suspense } from 'react';
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import { useLocation } from 'react-router';
// import CastView from "../CastView/CastView";
// import ReviewsView from "../ReviewsView/ReviewsView";
import styles from './styles.module.scss';

const CastView = lazy(() => import("../CastView/CastView"));
const ReviewsView = lazy(() => import("../ReviewsView/ReviewsView"));



const AdditionalInformation = () => {
  const { url, path } = useRouteMatch();
  const location = useLocation();

  return (
    <div className={styles.info}>
      <div>
        <h4>Additional Information</h4>
        <div className={styles.navigation}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: {from: location?.state?.from}
            }}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Cast
          </NavLink>

          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: {from: location?.state?.from}
            }}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Reviews
          </NavLink>
        </div>
      </div>

      <Suspense fallback={<h2>LOADING...</h2>}>
        <Route path={`${path}/cast`}>
          <CastView/>
        </Route>

        <Route path={`${path}/reviews`}>
          <ReviewsView />
        </Route>
      </Suspense>

    </div>
  );
}
 
export default AdditionalInformation;
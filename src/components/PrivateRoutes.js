import { Route, Navigate } from "react-router-dom";

// function PrivateRoute({ element, isAuthenticated }) {
//   return isAuthenticated ? element : <Navigate to="/" />;
// }

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;

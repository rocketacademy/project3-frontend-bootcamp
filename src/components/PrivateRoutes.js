import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ element, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/auth" />}
    />
  );
}

export default PrivateRoute;

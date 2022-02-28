import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/UseAuth";
const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading}=useAuth();
    if (isLoading) {
      return (
        <div className="spinner-border text-secondary text-center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
    console.log(user);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.displayName ? (
            children
          ) : ( 
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;
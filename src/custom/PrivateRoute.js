import React, {useEffect, useState} from 'react';
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  if (isAuthenticated === null) {
    return <></>
  }
  return (
    <Route {...rest} render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to='/'/>
      )
    }
    />
  );
};

export default PrivateRoute;

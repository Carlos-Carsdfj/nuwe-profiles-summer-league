/* eslint-disable react/prop-types */
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoutes({ isLoggedIn, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Search from './pages/search'
import Me from './pages/me'
import Wordbook from './pages/wordbook'


const routes = [
  {
    path: "/search",
    exact: true,
    main: () => <Search />
  },
  {
    path: "/me",
    main: () => <Me />
  },
  {
    path: "/wordbook",
    main: () => <Wordbook />
  }
]


function App() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li><Link to="/search">search</Link></li>
            <li><Link to="/wordbook">wordbook</Link></li>
            <li><Link to='/me'>me</Link> </li>
          </ul>
        </div>

        <hr />


        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}

        </Switch>


      </Router>

    </>
  );
}

export default App;

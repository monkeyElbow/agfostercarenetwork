import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MenuMain from './components/MenuMain'
import { AuthProvider } from './util/AuthContext';

import PrivateRoute from './components/PrivateRoute';

import home from './pages/home.js';
import about from './pages/about.js';
import signin from './pages/signin';
import profile from './pages/profile'
import signup from './pages/signup';
import ForgotPassword from './pages/ForgotPassword';
import pagenotfound from './pages/pagenotfound';
import UpadateProfile from './pages/UpadateProfile';

// import { AuthProvider } from './util/Auth';

function App({currentUser}) {
  return (
    <>
    <Router>
      <AuthProvider>

    <div>
    {!currentUser && <div>no user logged in</div>}
</div>

    <header>
    <MenuMain />
    </header>

<Switch>
    <Route exact path="/" component={home} />
    <Route path="/about" component={about} />
    <Route path="/signin" component={signin} />
    <PrivateRoute path="/profile" component={profile} />
    <PrivateRoute path="/update-profile" component={UpadateProfile} />
    <Route path="/signup" component={signup} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route component={pagenotfound} />

</Switch>
      </AuthProvider>

      </Router>
  </>
  );
}

export default App;



// https://github.com/WebDevSimplified/React-Firebase-Auth/blob/master/src/contexts/AuthContext.js
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ReactGA from 'react-ga'
import {createBrowserHistory} from 'history'
import { useEffect } from "react";

import MenuMain from './components/MenuMain'
import { AuthProvider } from './util/AuthContext';

import PrivateRoute from './components/PrivateRoute';

import Home from './pages/home.js';
import about from './pages/about.js';
import signin from './pages/signin';
import profile from './pages/profile'
import signup from './pages/signup';
import forgotPassword from './pages/forgotPassword';
import pagenotfound from './pages/pagenotfound';
import contact from './pages/contact';
import CreateProfile from './pages/createProfile';
import UpdateProfile from './pages/UpdateProfile';
import dashboard from './pages/dashboard';
import mapPage from './pages/mapPage';
import Footer from './components/Footer';
import updatePassword from './pages/updatePassword';
import networkPage from './pages/networkPage';
import DeleteAccount from './pages/DeleteAccount';

import Admin from './pages/admin/Admin';


// import Messages from './pages/Messages'
import network2 from './pages/network2';
import Sort from './pages/sort';

function App() {

  ReactGA.initialize('UA-145080690-1')

  const history = createBrowserHistory()
  history.listen(location => {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
   
  }, [history])



  return (
    <>
    <Router>
      <AuthProvider>

    <header>
    <MenuMain currentUser="currentUser" />
    </header>

<Switch>

    <Route exact path="/" component={Home} />


    <Route path="/about" component={about} />
    <Route path="/signin" component={signin} />
    <Route path="/contact" component={contact} />
    
    <PrivateRoute path="/network" component={networkPage} />
    <PrivateRoute path="/network2" component={network2} />
 
    {/* <PrivateRoute path="/messages" component={Messages} /> */}
    <PrivateRoute path="/sort" component={Sort} />

    <PrivateRoute path="/profile" component={profile} />
    <PrivateRoute path="/update-password" component={updatePassword} />
    <PrivateRoute path="/map" component={mapPage} />
    <PrivateRoute path="/admin" component={Admin} />
    <PrivateRoute path="/dashboard" component={dashboard} />
    <PrivateRoute path="/create-profile" component={CreateProfile} />
    <PrivateRoute path="/update-profile" component={UpdateProfile} />
    <PrivateRoute path="/delete-account" component={DeleteAccount} />
    <Route path="/signup" component={signup} />
    <Route path="/forgot-password" component={forgotPassword} />
    <Route component={pagenotfound} />

</Switch>

<Footer />

      </AuthProvider>

      </Router>
  </>
  );
}

export default App;



// https://github.com/WebDevSimplified/React-Firebase-Auth/blob/master/src/contexts/AuthContext.js
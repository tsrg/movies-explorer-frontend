
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies'
import NotFound from '../NotFound/NotFound';
import Saved from '../Saved/Saved';
import * as mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../../utils/ProtectedRoute';

function App() {

  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [profileSaved, setProfileSaved] = useState(false);

  const getUserInfo = () => {
    return mainApi.getUserInfo()
    .then((res) => {
      setLoggedIn(true);
      setCurrentUser(res);
    })
  }

  function handleRegister(email, name, password) {
    mainApi.register({'email': email, 'name': name, 'password': password})
      .then(() => { getUserInfo() })
      .then(() => {
        history.push('/movies');
      })
      .catch((err) => {console.log(err);})
  }

  function handleLogin(email, password) {
    mainApi.login({'email': email, 'password': password})
    .then(() => { getUserInfo() })
    .then(() => {
      history.push('/movies');
    })
    .catch((err) => console.log(err))
  }

  function handleEditProfile(email, name) {
    const userData = {'email': email, 'name': name};
    mainApi.editUserInfo(userData)
      .then(() => {getUserInfo()})
      .then(() => {setProfileSaved(true)})
  }

  function handleGood() {
    setProfileSaved(false);
    history.push('/profile');
  }

  function hanldeSignOut() {
    mainApi.logout()
    .then(() => {
      setLoggedIn(false);
      history.push('/sign-in');
    })
  }

  useEffect(() => {
    getUserInfo()
    .catch((err) => {
      setLoggedIn(false);
    })
  }, []);

  if (loggedIn === null) {
    return <Preloader />
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <>
            <Header type={loggedIn ? "signedIn" : "login"} color={"green"}/>
            <Main />
            <Footer />
          </>
        </Route>
        <Route path="/sign-up">
          {loggedIn ? <Redirect to="/movies" /> : <Register onRegister={handleRegister}/>}
        </Route>
        <Route path="/sign-in">
          {loggedIn ? <Redirect to="/movies" /> : <Login onLogin={handleLogin} />}
        </Route>
        <ProtectedRoute
          path="/movies"
          component={Movies}
          loggedIn={loggedIn}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          onLogOut={hanldeSignOut}
          loggedIn={loggedIn}
        />
        <Route path="/edit-profile">
          <>
            <Header type={"signedIn"} color={"black"}/>
            {
              !profileSaved ?
              <EditProfile onSave={handleEditProfile} /> :
              <Saved onSubmit={handleGood} />
            }
          </>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;


import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
//import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import * as mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(null);
  const [userData, setUserData] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);
  const [regFail, setRegFail] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const getUserInfo = () => {
    return mainApi.getUserInfo()
    .then((res) => {
      setLoggedIn(true);
      setUserData(res.email);
      setCurrentUser(res);
    })
  }

  function handleRegister(email, name, password) {
    mainApi.register({'email': email, 'name': name, 'password': password})
      .then(() => {setRegSuccess(true)})
      .then(() => {
        history.push('/sign-in')
      })
      .catch((err) => {console.log(err);
        setRegFail(true);})
  }

  function handleLogin(email, password) {
    mainApi.login({'email': email, 'password': password})
    .then(() => { getUserInfo() })
    .then(() => {
      history.push('/movies');
    })
    .catch((err) => console.log(err))
  }

  function handleEditProfile(email, password, name) {
    const userData = password === null ? {'email': email, 'name': name} : {'email': email, 'name': name, 'password': password};
    mainApi.editUserInfo(userData)
      .then(() => {getUserInfo()})
      .then(() => {history.push('/profile')})
  }

  function hanldeSignOut() {
    mainApi.logout();
    setUserData('');
    setLoggedIn(false);
    history.push('/sign-in');
  }

  useEffect(() => {
    getUserInfo()
    .catch((err) => {
      setLoggedIn(false);
    })
  }, []);

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
          <Register onRegister={handleRegister}/>
        </Route>
        <Route path="/sign-in">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/movies">
          <>
            <Header type={"signedIn"} color={"black"}/>
            <Movies type={"all-movies"} />
            <Footer />
          </>
        </Route>
        <Route path="/saved-movies">
          <>
            <Header type={"signedIn"} color={"black"}/>
            <Movies type={"saved-movies"} />
            <Footer />
          </>
        </Route>
        <Route path="/profile">
          <>
            <Header type={"signedIn"} color={"black"}/>
            <Profile onLogOut={hanldeSignOut} />
          </>
        </Route>
        <Route path="/edit-profile">
          <>
            <Header type={"signedIn"} color={"black"}/>
            <EditProfile onSave={handleEditProfile} />
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

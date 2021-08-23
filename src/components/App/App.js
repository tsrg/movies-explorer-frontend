
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';

function App() {

  return (
      <Switch>
        <Route exact path="/">
          <>
            <Header type={"login"} color={"dark"}/>
            <Main />
            <Footer />
          </>
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/movies">
          <>
            <Header type={"signedIn"} color={"light"}/>
            <Movies type={"all-movies"} />
            <Footer />
          </>
        </Route>
        <Route path="/saved-movies">
          <>
            <Header type={"signedIn"} color={"light"}/>
            <Movies type={"saved-movies"} />
            <Footer />
          </>
        </Route>
        <Route path="/profile">
          <>
            <Header type={"signedIn"} color={"light"}/>
            <Profile />
          </>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
  );
}

export default App;

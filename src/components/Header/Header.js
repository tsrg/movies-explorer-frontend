import logo from '../../images/logo.svg';
import logoSignedIn from '../../images/logoSignedIn.svg';
import accountIcon from '../../images/account-button-icon.svg';
import { Link } from 'react-router-dom';

function Header(props) {

  const content = () => {
    if (props.type === "signedIn") {
      return (
        <>
          <Link to="/"><img className="header__logo" src={logoSignedIn} alt="Логотип" /></Link>
          <div className="header__link-container">
            <Link className="header__link header__link_type_movies"  to="/movies">Фильмы</Link>
            <Link className="header__link header__link_type_movies"  to="/saved-movies">Сохранённые фильмы</Link>
            <Link className="header__link header__link_type_account"  to="/profile">Аккаунт<img className="header__account-icon" src={accountIcon} alt="Иконка аккаунта"></img></Link>
          </div>
        </>
      )
    } else if (props.type === "login") {
      return (
        <>
          <img className="header__logo" src={logo} alt="Логотип" />
          <div className="header__link-container">
            <Link className="header__link header__link_type_signup"  to="/sign-up">Регитрация</Link>
            <Link className="header__link header__link_type_signin"  to="/sign-in">Войти</Link>
          </div>
        </>
      )
    }
  }

  return (
    <header className={"header header_type_" + props.color}>
      <div className="header__container">
          {content()}
      </div>
    </header>
  )
}

export default Header;

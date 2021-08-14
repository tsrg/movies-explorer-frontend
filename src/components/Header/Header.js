import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {

  const content = () => {
    if (props.link === "register") {
      return (
        <Link className="header__link"  to="/sign-up">Зарегистрироваться</Link>
      )
    } else if (props.link === "login") {
      return (
        <>
          <Link className="header__link header__link_type_signup"  to="/sign-up">Регитрация</Link>
          <Link className="header__link header__link_type_signin"  to="/sign-in">Войти</Link>
        </>
      )
    } else if (props.link === "logout") {
      return (
        <>
          <span className="header__user-email">{props.userData}</span>
          <span className="header__link" onClick={props.onSignOut}>Выйти</span>
        </>
      )
    }
  }

  return (
    <header className="header">
      <div className="header__container">
      <img className="header__logo" src={logo} alt="Логотип Место" />
      <div className="header__link-container">
        {content()}
      </div>
      </div>
    </header>
  )
}

export default Header;

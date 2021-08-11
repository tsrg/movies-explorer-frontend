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
          <Link className="header__link"  to="/sign-in">Регитрация</Link>
          <Link className="header__link"  to="/sign-in">Войти</Link>
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
      <img className="header__logo" src={logo} alt="Логотип Место" />
      <div className="header__link-container">
        {content()}
      </div>
    </header>
  )
}

export default Header;

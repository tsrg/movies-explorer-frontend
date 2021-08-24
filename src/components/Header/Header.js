import './Header.css';
import logo from '../../images/logo.svg';
import accountIcon from '../../images/account-button-icon.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header(props) {

  const [isBugerMenuOpen, setBurgerMenuOpen] = useState(false);

  function openMenu() {
    setBurgerMenuOpen(true);
  }

  function closeMenu() {
    setBurgerMenuOpen(false);
  }

  const content = () => {
    if (props.type === "signedIn") {
      return (
        <>
          <NavLink to="/"><img className="header__logo" src={logo} alt="Логотип" /></NavLink>
          <div className="header__menu">
            <NavLink className="header__menu-item header__menu-item_type_movies" activeClassName="header__menu-item_type_active" to="/movies">Фильмы</NavLink>
            <NavLink className="header__menu-item header__menu-item_type_movies" activeClassName="header__menu-item_type_active" to="/saved-movies">Сохранённые фильмы</NavLink>
            <NavLink className="header__menu-item header__menu-item_type_account" activeClassName="header__menu-item_type_active" to="/profile">Аккаунт<img className="header__account-icon" src={accountIcon} alt="Иконка аккаунта"></img></NavLink>
          </div>
          <button className="header__burger-button" onClick={openMenu} />
          <section className={isBugerMenuOpen ? "burger-menu burger-menu_open" : "burger-menu"}>
            <button className="burger-menu__close-button" onClick={closeMenu}></button>
            <div className={isBugerMenuOpen ? "burger-menu__container burger-menu__container_open" : "burger-menu__container"}>
              <div className="burger-menu__main">
                <NavLink className="burger-menu__item burger-menu__item_type_movies" exact activeClassName="burger-menu-item_type_active" onClick={closeMenu} to="/">Главная</NavLink>
                <NavLink className="burger-menu__item burger-menu__item_type_movies" activeClassName="burger-menu-item_type_active" onClick={closeMenu} to="/movies">Фильмы</NavLink>
                <NavLink className="burger-menu__item burger-menu__item_type_movies" activeClassName="burger-menu-item_type_active" onClick={closeMenu} to="/saved-movies">Сохранённые фильмы</NavLink>
              </div>
              <NavLink className="burger-menu__item burger-menu__item_type_account" activeClassName="burger-menu-item_type_active" onClick={closeMenu} to="/profile">Аккаунт<img className="header__account-icon" src={accountIcon} alt="Иконка аккаунта"></img></NavLink>
            </div>
          </section>
        </>
      )
    } else if (props.type === "login") {
      return (
        <>
          <img className="header__logo" src={logo} alt="Логотип" />
          <div className="header__menu header__menu_type_buttons">
            <NavLink className="header__menu-item header__menu-item_type_signup" to="/sign-up">Регитрация</NavLink>
            <NavLink className="header__menu-item header__menu-item_type_signin" to="/sign-in">Войти</NavLink>
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

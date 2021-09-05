import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  function handleLogoutClick() {
    props.onLogOut();
  }

  return(
    <>
      <Header type={"signedIn"} color={"black"} />
      <section className="profile">
        <p className="profile__hello">Привет, {currentUser.name}!</p>
        <ul className="profile__info">
          <li className="profile__info-line">
            <span className="profile__info-line-content">Имя</span>
            <span className="profile__info-line-content">{currentUser.name}</span>
          </li>
          <li className="profile__info-line">
            <span className="profile__info-line-content">E-mail</span>
            <span className="profile__info-line-content">{currentUser.email}</span>
          </li>
        </ul>

        <div className="profile__buttons">
          <Link className="profile__edit-button" to="/edit-profile">Редактировать</Link>
          <button className="profile__logout-button" onClick={handleLogoutClick}>Выйти из аккаунта</button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Profile;

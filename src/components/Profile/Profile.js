import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  return(
    <section className="profile">
      <p className="profile__hello">Привет, Виталий!</p>
      <ul className="profile__info">
        <li className="profile__info-line">
          <span className="profile__info-line-content">Имя</span>
          <span className="profile__info-line-content">Сергей</span>
        </li>
        <li className="profile__info-line">
          <span className="profile__info-line-content">E-mail</span>
          <span className="profile__info-line-content">tsg@tmedia.fm</span>
        </li>
      </ul>

      <div className="profile__buttons">
        <Link className="profile__edit-button" to="/eidt-profile">Редактировать</Link>
        <Link className="profile__logout-button" to="/logout">Выйти из аккаунта</Link>
      </div>
    </section>
  )
}

export default Profile;

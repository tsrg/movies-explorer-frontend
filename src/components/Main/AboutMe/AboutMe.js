import './AboutMe.css';
import photo from '../../../images/photo.png'

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info-container">
          <img className="about-me__photo" src={photo} alt="Фотография"></img>
          <div className="about-me__info">
            <p className="about-me__name">Сергей</p>
            <p className="about-me__main-info">Фронтенд-разработчик, 35 лет</p>
            <p className="about-me__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <ul className="about-me__social-links">
              <li className="about-me__social-link"><a className="about-me__link" href="https://github.com/tsrg">GitHub</a></li>
              <li className="about-me__social-link"><a className="about-me__link" href="https://vk.com/id8351005">Vk</a></li>
              <li className="about-me__social-link"><a className="about-me__link" href="https://www.facebook.com/profile.php?id=100008028614871">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;

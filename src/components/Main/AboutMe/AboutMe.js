import photo from '../../images/photo.png'

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info-container">
        <img className="about-me__photo" src={photo} alt="Фотография"></img>
        <div className="about-me__info">
          <p className="about-me__name">Сергей</p>
          <p className="about-me__main-info">Фронтенд-разработчик, 35 лет</p>
          <p className="about-me__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="about-me__social-links">
            <li className="about-me__social-link">GitHub</li>
            <li className="about-me__social-link">Vk</li>
            <li className="about-me__social-link">Facebook</li>
          </ul>
        </div>
      </div>
      <h3 className="about-me__portfolio-header">Портфолио</h3>
      <ul className="about-me__portfolio-list">
        <li className="about-me__portfolio-item">
          <span className="about-me__portfolio-text">Статичный сайт</span>
          <span className="about-me__portfolio-icon">&#8599;</span>
        </li>
        <li className="about-me__portfolio-item">
          <span className="about-me__portfolio-text">Адаптивный сайт</span>
          <span className="about-me__portfolio-icon">&#8599;</span>
        </li>
        <li className="about-me__portfolio-item">
          <span className="about-me__portfolio-text">Одностраничное приложение</span>
          <span className="about-me__portfolio-icon">&#8599;</span>
        </li>
      </ul>
    </section>
  )
}

export default AboutMe;

import photo from '../../images/photo.png'

function Student() {
  return (
    <section className="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__info-container">
        <img className="student__photo" src={photo} alt="Фотография"></img>
        <div className="student__info">
          <p className="student__name">Сергей</p>
          <p className="student__main-info">Фронтенд-разработчик, 35 лет</p>
          <p className="student__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="student__social-links">
            <li className="student__social-link">GitHub</li>
            <li className="student__social-link">Vk</li>
            <li className="student__social-link">Facebook</li>
          </ul>
        </div>
      </div>
      <h3 className="student__portfolio-header">Портфолио</h3>
      <ul className="student__portfolio-list">
        <li className="student__portfolio-item">
          <span className="student__portfolio-text">Статичный сайт</span>
          <span className="student__portfolio-icon">&#8599;</span>
        </li>
        <li className="student__portfolio-item">
          <span className="student__portfolio-text">Адаптивный сайт</span>
          <span className="student__portfolio-icon">&#8599;</span>
        </li>
        <li className="student__portfolio-item">
          <span className="student__portfolio-text">Одностраничное приложение</span>
          <span className="student__portfolio-icon">&#8599;</span>
        </li>
      </ul>
    </section>
  )
}

export default Student;

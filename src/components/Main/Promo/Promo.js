import { Link } from 'react-router-dom';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      </div>
      <div className="promo__menu">
        <Link className="promo__menu-item">О проекте</Link>
        <Link className="promo__menu-item">Технологии</Link>
        <Link className="promo__menu-item">Студент</Link>
      </div>
    </section>
  )
}

export default Promo;

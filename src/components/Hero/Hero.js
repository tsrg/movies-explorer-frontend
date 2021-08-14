//import pi from '../../images/pi.svg';
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
      </div>
      <div className="hero__menu">
        <Link className="hero__menu-item">О проекте</Link>
        <Link className="hero__menu-item">Технологии</Link>
        <Link className="hero__menu-item">Студент</Link>
      </div>
    </section>
  )
}

export default Hero;

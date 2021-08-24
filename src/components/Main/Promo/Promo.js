import './Promo.css';
import planet from '../../../images/planet.png';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <img className="promo__image" src={planet} alt="Планета кода" />
        <div className="promo__info-container">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className="promo__link" href="/#about-project">Узнать больше</a>
        </div>
      </div>
    </section>
  )
}

export default Promo;

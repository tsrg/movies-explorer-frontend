import './Footer.css';

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__underline">
        <p className="footer__copyright">&#169; 2020</p>
        <ul className="footer__links">
          <a className="footer__link" href="https://praktiku.yandex.ru"><li>Яндекс.Практикум</li></a>
          <a className="footer__link" href="https://github.com/"><li>Github</li></a>
          <a className="footer__link" href="https://www.facebook.com/"><li>Facebook</li></a>
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer;

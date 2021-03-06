import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__header">Портфолио</h3>
        <ul className="portfolio__list">
          <a href="https://tsrg.github.io/how-to-learn/" className="portfolio__link">
            <li className="portfolio__item">
              <span className="portfolio__text">Статичный сайт</span>
              <span className="portfolio__icon">&#8599;</span>
            </li>
          </a>
          <a href="https://tsrg.github.io/mesto/" className="portfolio__link">
          <li className="portfolio__item">
            <span className="portfolio__text">Адаптивный сайт</span>
            <span className="portfolio__icon">&#8599;</span>
          </li>
          </a>
          <a href="https://tsg.nomoredomains.monster" className="portfolio__link">
          <li className="portfolio__item">
            <span className="portfolio__text">Одностраничное приложение</span>
            <span className="portfolio__icon">&#8599;</span>
          </li>
          </a>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;

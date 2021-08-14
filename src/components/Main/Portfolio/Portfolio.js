function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <span className="portfolio__text">Статичный сайт</span>
          <span className="portfolio__icon">&#8599;</span>
        </li>
        <li className="portfolio__item">
          <span className="portfolio__text">Адаптивный сайт</span>
          <span className="portfolio__icon">&#8599;</span>
        </li>
        <li className="portfolio__item">
          <span className="portfolio__text">Одностраничное приложение</span>
          <span className="portfolio__icon">&#8599;</span>
        </li>
      </ul>
    </section>
  )
}

function About() {
  return (
    <section className="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__content">
        <h3 className="about__text-header">Дипломный проект включал 5 этапов</h3>
        <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className="about__content">
        <h3 className="about__text-header">На выполнение диплома ушло 5 недель</h3>
        <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about__timeline">
        <span className="about__timeline-fist-week">1 неделя</span>
        <span className="about__timeline-last-weeks">4 недели</span>
        <span className="about__timeline-week-name">Back-end</span>
        <span className="about__timeline-week-name">Front-end</span>
      </div>
    </section>
  )
}

export default About;

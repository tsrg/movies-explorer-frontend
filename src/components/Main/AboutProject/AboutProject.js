import './AboutProject.css';

function AboutProject() {
  return (
    <section id={"about-project"} className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__content">
          <h3 className="about-project__text-header">Дипломный проект включал 5&nbsp;этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__content">
          <h3 className="about-project__text-header">На выполнение диплома ушло 5&nbsp;недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="about-project__timeline">
          <span className="about-project__timeline-fist-week">1 неделя</span>
          <span className="about-project__timeline-last-weeks">4 недели</span>
          <span className="about-project__timeline-week-name">Back-end</span>
          <span className="about-project__timeline-week-name">Front-end</span>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;

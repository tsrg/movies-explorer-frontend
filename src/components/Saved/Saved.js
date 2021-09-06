import './Saved.css';
import savedIcon from '../../images/save.svg';

function Saved(props) {

  function handleSubmit() {
    props.onSubmit();
  }

  return (
    <section className="saved">
      <div className="saved__container">
        <img className="saved__icon" src={savedIcon} alt="Иконка ОК" />
        <p className="saved__text">Изменения сохранены</p>
        <button className="saved__button" onClick={handleSubmit}>Хорошо</button>
      </div>
    </section>
  )
}

export default Saved;

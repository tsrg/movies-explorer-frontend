import './SearchForm.css';
import findIcon from '../../../images/findicon.svg';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <label className="search-form__field">
          <input className="search-form__input" type="text" placeholder="Фильм" />
          <button className="search-form__button"><img src={findIcon} alt="Найти"></img></button>
        </label>
        <label className="search-form__checkbox-label">
          Короткометражки
          <input className="search-form__chekbox" type="checkbox" />
          </label>


      </form>
    </section>
  )
}

export default SearchForm;

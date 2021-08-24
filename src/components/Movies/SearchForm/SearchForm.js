import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form">
          <label className="search-form__field">
            <input className="search-form__input" type="text" placeholder="Фильм" />
            <input type="submit" value="" className="search-form__button" />
          </label>
          <label className="search-form__checkbox-label">
            <input className="search-form__chekbox" type="checkbox" />
            Короткометражки
          </label>
        </form>
      </div>
    </section>
  )
}

export default SearchForm;

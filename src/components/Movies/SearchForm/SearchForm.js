import './SearchForm.css';

function SearchForm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchSubmit();
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <label className="search-form__field">
          <input className="search-form__input" type="text" required name="search" placeholder="Фильм" />
          <input type="submit" className="search-form__button" value="" />
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

import './SearchForm.css';
import React, { useState } from 'react';

function SearchForm(props) {
  const [request, setRequest] = useState('');
  const [isShort, setIsShort] = useState(false);

  function handleChange(e) {
    setRequest(e.target.value);
  }

  function handleCheckBoxChange() {
    setIsShort(!isShort);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchSubmit(request, isShort);
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <label className="search-form__field">
            <input className="search-form__input" onChange={handleChange} type="text" required placeholder="Фильм" />
            <input type="submit" value="" className="search-form__button" />
          </label>
          <label className="search-form__checkbox-label">
            <input className="search-form__chekbox" type="checkbox" onChange={handleCheckBoxChange} />
            Короткометражки
          </label>
        </form>
      </div>
    </section>
  )
}

export default SearchForm;

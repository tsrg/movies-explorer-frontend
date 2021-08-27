import './SearchForm.css';
import React, { useState } from 'react';

function SearchForm(props) {
  const [request, setRequest] = useState('');

  function handleChange(e) {
    console.log(e.target.value);
    setRequest(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchSubmit(request);
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <label className="search-form__field">
          <input className="search-form__input" onChange={handleChange} type="text" required name="search" placeholder="Фильм" />
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

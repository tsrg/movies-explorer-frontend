import './Register.css';
import logo from '../../images/logo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register(props) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePasswordChange(e) {
      setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(email, name, password);
  }


  return (
    <section className="register">
      <div className="register__container">
        <Link to="/"><img className="register__logo" src={logo} alt="Логотип" /></Link>
        <p className="register__welcome">Добро пожаловать!</p>
        <form name="register-form" className="register__form" onSubmit={handleSubmit}>
        <label className="register__field">Имя
            <input className="register__input register__input_type_name" onChange={handleNameChange} type="text" required name="name" placeholder="Имя" id="name" minLength="2" maxLength="40" />
              <span className="register__input-warning register__input-warning_type_name"></span>
          </label>
          <label className="register__field">E-mail
            <input className="register__input register__input_type_email" onChange={handleEmailChange} type="text" required name="email" placeholder="e-mail" id="email" minLength="2" maxLength="40" />
            <span className="register__input-warning register__input-warning_type_email"></span>
          </label>
          <label className="register__field">Пароль
            <input className="register__input register__input_type_password" onChange={handlePasswordChange} type="password" required name="password" id="password" minLength="8" maxLength="40" />
            <span className="register__input-warning register__input-warning_type_email">Что-то пошло не так...</span>
          </label>
          <input type="submit" className="register__accept-button" value="Зарегистрироваться" />
        </form>
        <div className="register__login">
          <p className="register__login-text">Уже зарегистрированы?</p>
          <Link to="/sign-in" className="register__signin">Войти</Link>
        </div>
      </div>
    </section>
  )
}

export default Register;

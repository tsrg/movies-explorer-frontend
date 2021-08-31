import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(email, password);
  }

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/"><img className="login__logo" src={logo} alt="Логотип" /></Link>
        <p className="login__welcome">Рады видеть!</p>
        <form name="login-form" className="login__form" onSubmit={handleSubmit}>
          <label className="login__field">E-mail
            <input className="login__input login__input_type_email" type="text" onChange={handleEmailChange} required name="email" placeholder="e-mail" id="email" minLength="2" maxLength="40" />
            <span className="login__input-warning login__input-warning_type_email"></span>
          </label>
          <label className="login__field">Пароль
            <input className="login__input login__input_type_password" type="password" onChange={handlePasswordChange} required name="password" id="password" minLength="2" maxLength="40" />
            <span className="login__input-warning login__input-warning_type_email"></span>
          </label>
          <input type="submit" className="login__accept-button" value="Войти" />
        </form>
        <div className="login__login">
          <p className="login__login-text">Ещё не зарегистрированы?</p>
          <Link to="/sign-up" className="login__signup">Регистрация</Link>
        </div>
      </div>
    </section>
  )
}

export default Login;

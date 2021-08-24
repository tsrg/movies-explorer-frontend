import './Login.css';
import logo from '../../images/logo-reg.svg';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <section className="login">
      <div className="login__container">
        <Link to="/"><img className="login__logo" src={logo} alt="Логотип" /></Link>
        <p className="login__welcome">Рады видеть!</p>
        <form name="login-form" className="login__form" onSubmit={props.onSubmit}>
          <label className="login__field">E-mail
            <input className="login__input login__input_type_email" type="text" required name="email" placeholder="e-mail" id="email" minLength="2" maxLength="40" />
            <span className="login__input-warning login__input-warning_type_email"></span>
          </label>
          <label className="login__field">Пароль
            <input className="login__input login__input_type_password" type="password" required name="password" id="password" minLength="2" maxLength="40" />
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

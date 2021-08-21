import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className="nav-tab">
      <a className="nav-tab__item" href="/#about-project">О проекте</a>
      <a className="nav-tab__item" href="/#techs">Технологии</a>
      <a className="nav-tab__item" href="/#about-me">Студент</a>
    </nav>
  )
}

export default NavTab;

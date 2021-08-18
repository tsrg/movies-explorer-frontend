import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className="nav-tab">
      <Link className="nav-tab__item" to="/#about-project">О проекте</Link>
      <Link className="nav-tab__item">Технологии</Link>
      <Link className="nav-tab__item">Студент</Link>
    </nav>
  )
}

export default NavTab;

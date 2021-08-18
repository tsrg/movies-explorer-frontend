import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="promo__menu">
      <Link className="promo__menu-item">О проекте</Link>
      <Link className="promo__menu-item">Технологии</Link>
      <Link className="promo__menu-item">Студент</Link>
    </nav>
  )
}

export default Navigation;

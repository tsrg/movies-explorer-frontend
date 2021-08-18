import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  return (
    <section className="not-found">
      <p className="not-found__404">404</p>
      <p className="not-found__text">Страница не найдена</p>
      <button className="not-found__button" onClick={history.goBack}>Назад</button>
    </section>
  )
}

export default NotFound;

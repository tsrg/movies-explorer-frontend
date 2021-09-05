import './More.css';

function More (props) {
  return (
    <section className="load-more">
      <button className={ props.isActive ? "load-more__button load-more__button_active" : "load-more__button" } onClick={props.onClick}>Ещё</button>
    </section>
  )
}

export default More;

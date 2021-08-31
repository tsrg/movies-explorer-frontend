import './More.css';

function More (props) {
  return (
    <section className="load-more">
      <button className="load-more__button" onClick={props.onClick}>Ещё</button>
    </section>
  )
}

export default More;

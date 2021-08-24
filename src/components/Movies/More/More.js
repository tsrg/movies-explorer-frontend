import './More.css';

function More (props) {
  const moreButtonClass = (
    `load-more__button ${props.isActive ? 'load-more__button_active' : 'load-more__button_inactive'}`
  )

  return (
    <section className="load-more">
      <button className={moreButtonClass}>Ещё</button>
    </section>
  )
}

export default More;

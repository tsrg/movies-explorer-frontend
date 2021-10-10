import './Error.css';

function Error(props) {

  return (
    <section className={`popup ` + ((props.state !== 'OK') ? 'open' : 'closed') }>
      <div className="popup__container">
        <p className="popup__error-text">{props.state}</p>
      </div>
    </section>
  )
}

export default Error;

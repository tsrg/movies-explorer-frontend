import './EditProfile.css';
import React, { useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function EditProfile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [email, setEmail] = useState(currentUser.email);
  const [name, setName] = useState(currentUser.name);

  const buttonState = (email === currentUser.email && name === currentUser.name) ? ("disabled") : ("");
  const buttonClass = (email === currentUser.email && name === currentUser.name) ? ("edit-profile__accept-button edit-profile__accept-button_inactive") : ("edit-profile__accept-button");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSave(email, name);
  }


  return (
    <section className="edit-profile">
      <div className="edit-profile__container">
        <p className="edit-profile__welcome">Пора что то менять!</p>
        <form name="edit-profile-form" autoComplete="off" className="edit-profile__form" onSubmit={handleSubmit}>
        <label className="edit-profile__field">Имя
            <input autoComplete="off" value={name} className="edit-profile__input edit-profile__input_type_name" onChange={handleNameChange} type="text" required name="name" placeholder="Имя" id="name" minLength="2" maxLength="40" />
              <span className="edit-profile__input-warning edit-profile__input-warning_type_name"></span>
          </label>
          <label className="edit-profile__field">E-mail
            <input autoComplete="off" value={email} className="edit-profile__input edit-profile__input_type_email" onChange={handleEmailChange} type="email" required name="email" placeholder="e-mail" id="email" minLength="2" maxLength="40" />
            <span className="edit-profile__input-warning edit-profile__input-warning_type_email"></span>
          </label>
          <input type="submit" className={buttonClass} disabled={buttonState} value="Сохранить" />
        </form>
      </div>
    </section>
  )
}

export default EditProfile;

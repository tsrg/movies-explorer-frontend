import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {

    let isLiked = false;

    const movieLikeButtonClassName = (
        `card__like-btn ${isLiked ? 'card__like-btn_active' : 'card__like-btn_inactive'}`
        );

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function duration() {
      if (props.duration < 60) {
        return (
          props.duration + ' м'
        )}
        else {
          return (
            Math.floor(props.duration / 60) + ' ч ' + (props.duration % 60) + ' м'
          )
        }
      }

    return (
        <article id={props.id} className="card">
            <div className="card__title-container">
              <div className="card__text-container">
                <h2 className="card__title">{props.name}</h2>
                <p className="card__duration">{duration()}</p>
              </div>
              <button className={movieLikeButtonClassName + " " + props.cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
            </div>
            <div className="card__pic-wrapper">
                <img className="card__picture" src={props.image} alt={props.name} />
            </div>
        </article>
        )
}

export default MoviesCard;

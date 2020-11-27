import React from "react";
import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";

const MovieCard = ({ movie, handleRemove, handlemovie }) => {
  const handleClick = () => {
    return handleRemove(movie.id);
  };
  const iswatched = () => {
    return handlemovie(movie.id);
  };

  return (
    <div className="Card">
      <img className="poster" src={movie.posterUrl} alt="" />
      <div className="Carddesc">
        <h1 className="title"> {movie.title} </h1>
        <h3 className="text"> {movie.description}</h3>
        <ReactStars {...movie.rate} classNames="rating" />
        <div className="btns">
        <button className="btnmovie" onClick={iswatched}>
          {" "}
          {movie.watched ? "Watched" : "Watch"}{" "}
        </button>
        <button className="btnmovie" onClick={handleClick}>
          {" "}
          Delete{" "}
        </button>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  posterURl: PropTypes.string,
  rate: PropTypes.object,
  handleRemove: PropTypes.func,
  handlemovie: PropTypes.func,
};

export default MovieCard;

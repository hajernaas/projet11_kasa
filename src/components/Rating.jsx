import React from "react";
import PropTypes from "prop-types";
import starRed from "../assets/star-active.svg";
import StarGray from "../assets/star-inactive.svg";

function Rating({ rating }) {
	const ratingValueMax = 5;
	return (
		<div className="rating">
			{Array.from({ length: rating }, (e, index) => (
				<img key={index} alt="Etoile pleine" src={starRed} />
			))}
			{Array.from({ length: ratingValueMax - rating }, (e, index) => (
				<img key={index} alt="Etoile vide" src={StarGray} />
			))}
		</div>
	);
}

Rating.propTypes = {
	rating: PropTypes.string,
};

export default Rating;
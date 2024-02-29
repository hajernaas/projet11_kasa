import React from "react";
import PropTypes from "prop-types";
import starRed from "../assets/start_active.png";
import StarGray from "../assets/star_inactive.png";

function Rating({ rating }) {
	const ratingValueMax = 5;
	return (
		// Générer une séquence des étoiles en fonction de valeur de rating
		<div className="rating">
			{/*  créer des étoiles remplies avec la valeur de rating */}
			{Array.from({ length: rating }, (e, index) => (
				<img key={`starRed-${index}`} alt="Etoile pleine" src={starRed} />
			))}
			{/*  créer des étoiles vides avec la valeur de ratingValueMax-rating */}
			{Array.from({ length: ratingValueMax - rating }, (e, index) => (
				<img key={`starGrey-${index}`} alt="Etoile vide" src={StarGray} />
			))}
		</div>
	);
}

Rating.propTypes = {
	rating: PropTypes.string,
};

export default Rating;

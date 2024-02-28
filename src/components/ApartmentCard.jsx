import React from "react";
import PropTypes from "prop-types";

// Utilisation des props id , Title,cover , pour générer une carte d'appartement depuis le composant AppartmentList
function ApartmentCard({ id, title, cover }) {
	return (
		<div id={id} className="card">
			<img className="card__image" src={cover} alt={title} />
			<h2 className="card__title">{title}</h2>
		</div>
	);
}

ApartmentCard.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	cover: PropTypes.string,
};
export default ApartmentCard;

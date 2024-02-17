import React from "react";
import PropTypes from "prop-types";
function AppartmentCard({ id, title, cover }) {
	return (
		<div id={id} className="card">
			<img className="card__image" src={cover} alt={title} />
			<h2 className="card__title">{title}</h2>
		</div>
	);
}

AppartmentCard.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	cover: PropTypes.string,
};
export default AppartmentCard;

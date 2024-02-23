import React from "react";
import PropTypes from "prop-types";
function Banner({ classBanner }) {
	return (
		// Passer une prop : classBanner (une chaine )comme argument et définir le text pour la bannière
		<div className={`banner ${classBanner} `}>
			<h1>
				Chez vous,
				<br className="banner__text" /> partout et ailleurs
			</h1>
		</div>
	);
}

Banner.propTypes = {
	classBanner: PropTypes.string,
};

Banner.defaultProps = {
	classBanner: "",
};

export default Banner;

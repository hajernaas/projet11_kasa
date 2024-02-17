import chevron from "../assets/arrow_back_down.svg";
import { useState } from "react";
import PropTypes from "prop-types";

function Collapse({ title, text }) {
	const [isOpen, setIsOpen] = useState(false);

	//--------------------------
	// Fonction en cas de tableau récupéré dans le state "text" (et non une string)
	//--------------------------
	function displayText() {
		if (Array.isArray(text)) {
			const equipments = text.map((elt) => <li key={`${elt}`}>{elt}</li>);

			return <ul> {equipments} </ul>;
		}
		return <p>{text}</p>;
	}
	/*
	const renderTextContent = () => {
		if (Array.isArray(text)) {
			const equipments = text.map((elt) => <li key={`${elt}`}>{elt}</li>);

			return <ul> {equipments} </ul>;
		}
		return <p>{text}</p>;
	};*/

	//--------------------------
	// Fonction pour inverser le déploiement des collapses (true/false)
	//--------------------------
	function handleExpand() {
		setIsOpen(!isOpen);
	}

	return (
		<div className="collapse">
			<div className="collapse__title" onClick={handleExpand}>
				<h2>{title}</h2>
				<img src={chevron} alt="chevron up down" className={isOpen ? "rotate-chevron" : ""} />
			</div>

			<div className={`collapse__text ${isOpen ? "visible" : ""}`}>{displayText()}</div>
		</div>
	);
}

Collapse.propTypes = {
	title: PropTypes.string,
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	//collapseState: PropTypes.bool,
};

export default Collapse;

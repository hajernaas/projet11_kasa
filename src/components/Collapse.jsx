import arrow from "../assets/chevron-up.svg";
import { useState } from "react";
import PropTypes from "prop-types";

function Collapse({ title, text }) {
	const [isOpen, setIsOpen] = useState(false);

	//Array.isArray(text) : Vérifie si la prop text est un tableau  dont le contenu text est ensuite affiché sous forme d'une liste à puces (ul) dans la page de détails de l'appartement.
	// sinon le text est affiché sous forme d'une chaine de caractéres dans la page A propos
	function displayText() {
		if (Array.isArray(text)) {
			const equipments = text.map((elt, index) => <li key={`${elt}-${index}`}>{elt}</li>);
			return <ul> {equipments} </ul>;
		}
		return <p>{text}</p>;
	}

	function handleExpand() {
		setIsOpen(!isOpen);
	}

	return (
		<div className="collapse">
			<div className="collapse__title" onClick={handleExpand}>
				<h2>{title}</h2>
				{<img src={arrow} alt="chevron up down" className={isOpen ? "rotate-arrow" : ""} />}
			</div>
			<div className={`collapse__text ${isOpen ? "visible" : ""}`}>{displayText()}</div>
		</div>
	);
}

Collapse.propTypes = {
	title: PropTypes.string,
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Collapse;

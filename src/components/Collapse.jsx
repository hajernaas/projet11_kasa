import arrow from "../assets/arrow_back_down.svg";
import { useState } from "react";
import PropTypes from "prop-types";
//import { FaAngleDown } from "react-icons/fa";

function Collapse({ title, text }) {
	const [isOpen, setIsOpen] = useState(false);

	function displayText() {
		if (Array.isArray(text)) {
			const equipments = text.map((elt) => <li key={`${elt}`}>{elt}</li>);

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
				<img src={arrow} alt="chevron up down" className={isOpen ? "rotate-arrow" : ""} />
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

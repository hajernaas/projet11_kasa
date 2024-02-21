import React, { useState } from "react";
import chevronRight from "../assets/chevron_carousel_right.svg";
import chevronLeft from "../assets/chevron_carousel_left.svg";
import PropTypes from "prop-types";

function Slideshow({ pictures }) {
	const [indexPicture, setIndexPicture] = useState(0);

	function nextSlide() {
		setIndexPicture(indexPicture === pictures.length - 1 ? 0 : indexPicture + 1);
	}
	function prevSlide() {
		setIndexPicture(indexPicture === 0 ? pictures.length - 1 : indexPicture - 1);
	}

	return (
		<div className="carousel" style={{ backgroundImage: `url(${pictures[indexPicture]})` }}>
			{pictures.length > 1 ? (
				<div>
					<img
						src={chevronLeft}
						alt="chevron gauche"
						className="carousel__arrow carousel__arrow--left"
						onClick={prevSlide}
					/>
					<img
						src={chevronRight}
						alt="chevron droit"
						className="carousel__arrow carousel__arrow--right"
						onClick={nextSlide}
					/>
					<div className="carousel__count">
						<p>
							{indexPicture + 1}/{pictures.length}{" "}
						</p>
					</div>
				</div>
			) : null}
		</div>
	);
}
export default Slideshow;

Slideshow.propTypes = {
	pictures: PropTypes.array,
};

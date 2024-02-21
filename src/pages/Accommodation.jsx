import React from "react";
import Data from "../data/Data.json";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";

function Accommodation() {
	const { id } = useParams();
	const searchAppartment = Data.find((appart) => appart.id === id);

	//let { pictures } = logementSelected;

	return (
		<main>
			<section>
				{/* {<Slideshow {...logementSelected} />} */}
				{<Slideshow pictures={searchAppartment.pictures} />}

				<p>page accommodation</p>
			</section>
		</main>
	);
}

export default Accommodation;

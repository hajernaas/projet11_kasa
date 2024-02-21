import React from "react";
import Data from "../data/Data.json";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";

function Accommodation() {
	const { id } = useParams();
	const selectedAppartment = Data.find((appart) => appart.id === id);

	if (selectedAppartment === undefined) {
		return <Navigate to="/error" />;
	}

	return (
		<main>
			<section>
				{<Slideshow pictures={selectedAppartment.pictures} />}

				<p>page accommodation</p>
			</section>
		</main>
	);
}

export default Accommodation;

import React from "react";
import Data from "../data/Data.json";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";

function Accommodation() {
	const { id } = useParams();
	const selectedAppartment = Data.find((appart) => appart.id === id);

	return (
		<main>
			<section className="accommodation-pictures">
				{<Slideshow pictures={selectedAppartment.pictures} />}
			</section>

			<section className="accommodation-collapse">
				<Collapse title="Description" text={selectedAppartment.description} />
				<Collapse title="Equipements" text={selectedAppartment.equipments} />
			</section>
		</main>
	);
}

export default Accommodation;

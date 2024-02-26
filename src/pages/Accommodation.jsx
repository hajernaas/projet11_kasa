import React from "react";
import Data from "../data/Data.json";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";

function Accommodation() {
	const { id } = useParams();
	const selectedAppartment = Data.find((appart) => appart.id === id);

	if (selectedAppartment === undefined) {
		return <Navigate to="/error" />;
	}

	return (
		<main>
			<section className="accommodation-pictures">
				{<Slideshow pictures={selectedAppartment.pictures} />}
			</section>

			<section className="accommodation-details">
				<div className="accommodation-details__info">
					<h2>{selectedAppartment.title}</h2>
					<h3>{selectedAppartment.location}</h3>
					<div className="accommodation-details__info--tags">
						{selectedAppartment.tags.map((tag, index) => (
							<div key={`${tag}-${index}`} className="accommodation-details__info--tag">
								<p>{tag}</p>
							</div>
						))}
					</div>
				</div>

				<div className="accommodation-details__profil">
					<Rating rating={selectedAppartment.rating} />
					<div className="accommodation-details__profil--host">
						<div className="accommodation-details__profil--host-name">
							<p>{selectedAppartment.host.name.split(" ")[0]}</p>
							<p>{selectedAppartment.host.name.split(" ")[1]}</p>
						</div>
						<div className="accommodation-details__profil--host-picture">
							<img alt={selectedAppartment.host.name} src={selectedAppartment.host.picture} />
						</div>
					</div>
				</div>
			</section>

			<section className="accommodation-collapse">
				<Collapse title="Description" text={selectedAppartment.description} />
				<Collapse title="Equipements" text={selectedAppartment.equipments} />
			</section>
		</main>
	);
}

export default Accommodation;

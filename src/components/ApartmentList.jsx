import React from "react";
import { Link } from "react-router-dom";
import ApartmentCard from "./ApartmentCard";
import Data from "../data/Data.json";

//Définir des props key , title et cover et de les passer à AppartmentCard
function ApartmentList() {
	return (
		<div className="appartments">
			{Data.map((item) => (
				<Link key={item.id} to={`/accommodation/${item.id}`}>
					<ApartmentCard key={item.id} title={item.title} cover={item.cover} />
				</Link>
			))}
		</div>
	);
}
export default ApartmentList;

import React from "react";
import { Link } from "react-router-dom";
import AppartmentCard from "../components/AppartmentCard";
import logements from "../data/logements.json";

function AppartmentList() {
	return (
		<div className="appartments">
			{logements.map((item) => (
				<Link className="card-link" key={item.id} to={`/accomodation/${item.id}`}>
					<AppartmentCard key={item.id} title={item.title} cover={item.cover} />
				</Link>
			))}
		</div>
	);
}
export default AppartmentList;

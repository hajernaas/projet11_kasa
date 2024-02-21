import React from "react";
import { Link } from "react-router-dom";
import AppartmentCard from "../components/AppartmentCard";
import Data from "../data/Data.json";

function AppartmentList() {
	return (
		<div className="appartments">
			{Data.map((item) => (
				<Link className="card-link" key={item.id} to={`/accommodation/${item.id}`}>
					<AppartmentCard key={item.id} title={item.title} cover={item.cover} />
				</Link>
			))}
		</div>
	);
}
export default AppartmentList;

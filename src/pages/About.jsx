import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
function About() {
	const dataAbout = [
		{
			id: "1",
			title: "Fiabilité",
			description:
				"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
		},
		{
			id: "2",
			title: "Respect",
			description:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme..",
		},
		{
			id: "3",
			title: "Service",
			description:
				"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question..",
		},
		{
			id: "4",
			title: "Sécurité",
			description:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
		},
	];

	return (
		<main>
			<section>
				<Banner classBanner="bannerAbout" />
				<div className="about">
					{dataAbout.map((data) => {
						return (
							<div key={data.id} className="about__collapse">
								<Collapse
									// style={{ margin: "30px 0" }}
									title={data.title}
									text={data.description}
								/>
							</div>
						);
					})}
				</div>
			</section>
		</main>
	);
}

export default About;

/*
{

	aboutDatas.map((data) => {
		return (
			<div key={data.id} className="about_main_collapse">
				<Collapse style={{ margin: "30px 0" }} title={data.title} content={data.content} />
			</div>
		);
	});
}*/

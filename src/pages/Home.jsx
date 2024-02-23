import Banner from "../components/Banner";
import AppartmentList from "../components/AppartmentList";

/*  c'est la page d'accueil d'une application d'hébergement*/
/* Affichage du composant bannière et composant liste des cartes   */

function Home() {
	return (
		<main>
			<section>
				<Banner />
				<AppartmentList />
			</section>
		</main>
	);
}

export default Home;

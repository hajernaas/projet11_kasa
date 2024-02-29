import Banner from "../components/Banner";
import ApartmentList from "../components/ApartmentList";

/*  c'est la page d'accueil d'une application d'hébergement*/
/* Affichage du composant bannière et composant liste des appartements   */
function Home() {
	return (
		<main>
			<>
				<Banner />
				<ApartmentList />
			</>
		</main>
	);
}

export default Home;

import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.svg";

function Header() {
	return (
		<header>
			<img src={logo} alt="Logo  Kasa " className="header-logo" />

			<nav>
				<ul>
					<li>
						<NavLink to="/">Accueil</NavLink>
					</li>
					<li>
						<NavLink to="/about">A Propos</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;

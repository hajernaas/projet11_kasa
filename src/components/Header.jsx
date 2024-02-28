import { NavLink, Link } from "react-router-dom";
import logo from "../assets/LOGO.svg";

function Header() {
	return (
		<header>
			<Link to="/">
				<img src={logo} alt="Logo  Kasa " className="header-logo" />
			</Link>

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

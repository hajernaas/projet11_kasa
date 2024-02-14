import { Link } from "react-router-dom";
import logo from "../assets/LOGO.svg";

function Header() {
	return (
		<header>
			<img src={logo} alt="logo Kasa" className="header-logo" />
			<nav>
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/about">A propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;

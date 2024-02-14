//import "./footer.scss";
import logoFooter from "../assets/LOGO_footer.svg";

function Footer() {
	return (
		<footer>
			<img src={logoFooter} alt="logo Kasa" className="footer-logo" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;

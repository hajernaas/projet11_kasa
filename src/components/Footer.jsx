import logoFooter from "../assets/LOGO_footer.svg";

function Footer() {
	return (
		<footer className="footer">
			<img src={logoFooter} alt="Logo Footer Kasa  " />
			<p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;

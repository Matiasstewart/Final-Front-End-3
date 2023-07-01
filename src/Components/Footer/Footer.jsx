import React from "react";
import "./Footer.css";
import { useContext } from "react";
import { GlobalContext } from "../../Components/utils/global.context";

const Footer = () => {
	const { theme, isDark } = useContext(GlobalContext);

	return (
		<footer style={theme}>
			<p>Powered by</p>
			{!isDark ? (
				<img src="../../images/DH_logo_black.png" alt="DH-logo-black" />
			) : (
				<img src="../../images/DH_logo_white.png" alt="DH-logo-white" />
			)}
		</footer>
	);
};

export default Footer;

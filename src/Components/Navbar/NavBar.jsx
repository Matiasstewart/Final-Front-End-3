import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { GlobalContext } from "../utils/global.context";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	const { toggleTheme, isDark } = useContext(GlobalContext);

	const onChangeTheme = () => {
		toggleTheme();
	};

	return (
		<header>
			<div
				className={`navBar ${isDark ? "nav-dark" : "nav-light"}`}
			>

				<div className={`navbar-brand-container ${isDark ? "dark" : "light"}`}>
					<a href="/home" className="navbar-brand">
						DH Odonto
					</a>
				</div>

				<div className="navBarBottom">
					<div className="itemContainer">
						<ul className={`navList ${isDark ? "dark" : "light"}`}>
							<li className="nav-item">
								<Link to="/home" className={`nav-link navList ${isDark ? "dark" : "light"}`}
								style={{textDecoration : "none", color: "grey", marginLeft:"10px"}}>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className={`nav-link navList ${isDark ? "dark" : "light"}`}
								style={{textDecoration : "none", color: "grey"}}>
									Contact
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/favs" className={`nav-link navList ${isDark ? "dark" : "light"}`} 
								style={{textDecoration : "none", color: "grey"}}>
									<p>Favs</p>
								</Link>
							</li>
						</ul>
					</div>
					<button
						className={`${isDark ? "btn-dark" : "btn-light"}`}
						onClick={onChangeTheme}
					>
						{isDark ? (
							<FontAwesomeIcon
								icon={faSun}
								size="lg"
								style={{ color: "#FFD700" }}
							/>
						) : (
							<FontAwesomeIcon
								icon={faMoon}
								size="lg"
								style={{ color: "#FFD700" }}
							/>
						)}
					</button>
				</div>
			</div>
		</header>
	);
};

export default NavBar;

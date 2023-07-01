import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../utils/global.context";
import { useContext } from "react";
import "./DentistCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";

const DentistCard = ({ dentist }) => {
	const {
		favsState,
		addFavDentist,
		removeFavDentist,
		theme,
		isDark,
	} = useContext(GlobalContext);

	const isFavorite = favsState.favoriteDentists.some(
		(favorite) => favorite.id === dentist.id
	);

	const toggleFav = () => {
		isFavorite ? removeFavDentist(dentist) : addFavDentist(dentist);
	};

	return (
		<div key={dentist.id} className="cardContainer">
			<ToastContainer />
			<Link to={`/dentist/${dentist.id}`} className="link">
				<div style={theme} border={`${isDark ? "light" : "dark"}`}>
					<h3 className="cardTitle" style={theme}>
						{dentist.name}
					</h3>
					<img
						src="/images/doctor.jpg"
						alt="doctor placeholder"
					/>
					<div className="cardBody">
						<div className="cardText cardTextId" style={theme}>
							ID: {dentist.id}
						</div>
						<div className="cardText" style={theme}>
							Name: {dentist.name}
						</div>
						<div className="cardText" style={theme}>
							Username: {dentist.username}
						</div>
					</div>
				</div>
			</Link>
			<button onClick={toggleFav} >
				{isFavorite ? (
					<div>
						<FontAwesomeIcon
							icon={faXmark}
							rotation={90}
							size="lg"
							style={{ color: "#FF6347" }}
						/>
						<span> Remove</span>
					</div>
				) : (
					<div>
						<FontAwesomeIcon
							icon={faStar}
							rotation={90}
							style={{ color: "#FFD700" }}
						/>
						<span> Add to favs</span>
					</div>
				)}
			</button>
		</div>
	);
};

export default DentistCard;

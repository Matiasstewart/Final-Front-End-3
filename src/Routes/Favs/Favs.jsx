import React from "react";
import Card from "../../Components/DentistCard/DentistCard";
import { GlobalContext } from "../../Components/utils/global.context";
import { useContext } from "react";
import styles from "./Favs.module.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Favs = () => {
	const { favsState, removeAllDentists } = useContext(GlobalContext);
	const navigate = useNavigate();

	return (
		<>
			<section>
				<ToastContainer />
				<h1 className="mt-4">Favorite Dentists</h1>
				<div>
					{favsState.favoriteDentists.length > 0 ? (
						<div className="d-flex flex-column align-items-center">
							<Button
								className="w-50 mt-4 mb-4 p-2"
								onClick={() => removeAllDentists()}
							>
								Remove all favs
							</Button>
							<div className={styles.divCardsFav}>
								{favsState.favoriteDentists.map((dentist) => (
									<div key={dentist.id}>
										<Card {...dentist} dentist={dentist} />
									</div>
								))}
							</div>
						</div>
					) : (
						<div className={styles.divNoFavs}>
							<h3 className="p-2">No favorites have been added yet</h3>
							<Button onClick={() => navigate("/home")} className="w-50 mt-4">
								Back to home
							</Button>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Favs;

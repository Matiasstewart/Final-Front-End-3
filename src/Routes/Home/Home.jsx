import React from "react";
import Card from "../../Components/DentistCard/DentistCard";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../Components/utils/global.context";
import Spinner from "../../Components/Spinner/Spinner";
import styles from "./Home.module.css";

const Home = () => {
	const { dentists, theme } = useContext(GlobalContext);
	const [showSpinner, setShowSpinner] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShowSpinner(false);
		}, 2000);
	}, []);

	return (
		<section style={theme}>
			<h1 className="mt-4">Home</h1>
			{showSpinner ? (
				<Spinner />
			) : (
				<div className={styles.divCards}>
					{dentists.map((dentist) => (
						<div key={dentist.id} className={styles.divCard}>
							<Card {...dentist} dentist={dentist} />
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Home;

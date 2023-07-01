import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../utils/global.context";
import { Link } from "react-router-dom";
import "./DetailCard.css"

const DetailCard = () => {
	const [dentist, setDentist] = useState([]);
	const { theme, isDark } = useContext(GlobalContext);
	const params = useParams();
	const idParam = parseInt(params.id);
	const navigate = useNavigate();


	const getDentistById = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/users/${idParam}`
			);
			const data = await response.json();
			setDentist(data);
		} catch (error) {
			console.error(error);
		}
	};


	// Alternative way to get the dentist card without re-calling the API
	// *Note before uncommenting the code below: it is neccesary to import {dentists} from GlobalContext on line 9
	// const getDentist = () => {
	// 	let dentistFiltered = dentists.filter((dentist) => dentist.id === idParam);
	// 	setDentist(dentistFiltered[0]);
	// 	return dentistFiltered;
	// };

	useEffect(() => {
		getDentistById();
	}, [params]);

	return (
		<>
			{dentist && (
				<section>
					<div className="">
						<h1 className="card">
							Details about Dentist {dentist.name}
						</h1>
						<section
							className={`cardContainer ${
								isDark ? "border-light" : "border-dark"
							}`}
							style={theme}
						>
							<div className={`card-body row `}>
								<div className="imgContainer">
									<img
										className="card-img-top"
										src="/images/doctor.jpg"
										alt="doctor placeholder"
									/>
								</div>
								<div >
									<ul className={`list-group`}>
										<li className={`list-group-item ${isDark? "border-light" : "border-secondary"}`} style={theme}>
											<u><i>Name</i></u>: {dentist.name}
										</li>
										<li className={`list-group-item ${isDark? "border-light" : "border-secondary"}`} style={theme}>
											<u><i>Email</i></u>: {dentist.email}
										</li>
										<li className={`list-group-item ${isDark? "border-light" : "border-secondary"}`} style={theme}>
											<u><i>Phone</i></u>: {dentist.phone}
										</li>
										<li className={`list-group-item ${isDark? "border-light" : "border-secondary"}`} style={theme}>
											<u><i>Website</i></u>: {dentist.website}
										</li>
									</ul>
									<div className="text-center">
										<Link to="/contact" className="linkDetail">
											<button className="">Schedule Consult</button>
										</Link>
									</div>
								</div>
							</div>
						</section>
						<div className="divBtnDetail">
						<button className="" onClick={() => navigate("/home")}>
							Back to home
						</button>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default DetailCard;

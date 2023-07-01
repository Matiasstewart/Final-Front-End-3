import React from "react";
import FormContact from "../../Components/FormContact/FormContact";

const Contact = () => {
	return (
		<section>
			<div className="d-flex flex-column me-4 ms-4 text-center">
				<h1 className="mt-4">Contact</h1>
				<h2 className="align-self-center mt-4">Want to know more?</h2>
				<p className="align-self-center">
					Send us your questions and we will contact you
				</p>
				<FormContact />
			</div>
		</section>
	);
};

export default Contact;

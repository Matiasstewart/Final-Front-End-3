import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormContact.css"

const FormContact = () => {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [validationError, setValidationError] = useState("");
	const navigate = useNavigate();

	const onChangeUserName = (event) => {
		setUserName(event.target.value);
	};
	const onChangeUserEmail = (event) => {
		setUserEmail(event.target.value.trim());
	};

	const validateUserName = (userName) => {
		return userName.length > 5;
	};

	const validateUserEmail = (userEmail) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(userEmail);
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		const isValidUserName = validateUserName(userName);
		const isValidEmail = validateUserEmail(userEmail);

		if (isValidUserName && isValidEmail) {
			setValidationError(false);
		} else {
			setValidationError(
				"Please, verify if the information provided above is correct"
			);
		}
	};

	return (
		<div>
			<form onSubmit={onSubmitForm} className="">

				<div className="section">
					<label className="">Full name</label>
					<input
						type="text"
						value={userName}
						onChange={onChangeUserName}
						placeholder="at least 6 characters"
						className=""
						disabled={validationError === false}
					/>
				</div>
				<div className="section">
					<label className="col-3">Email</label>
					<input
						type="email"
						value={userEmail}
						onChange={onChangeUserEmail}
						placeholder="myemail@example.com"
						className=""
						disabled={validationError === false}
					/>
				</div>


				<div className="div-btn">
				<button
					type="submit"
					disabled={validationError === false}
					className=""
				>
					Submit
				</button>
				</div>

				<div style={{color:"red"}}>
					{validationError}
				</div>

				{validationError === false && (
					<p
						className="h1 d-flex flex-column text-center"
						style={{ color: "#2ECC71" }}
					>
						Thank you {userName}, we will be emailing you soon!
						<Button onClick={() => navigate("/home")} className="">
							Back to home
						</Button>
					</p>
				)}
			</form>
		</div>
	);
};

export default FormContact;

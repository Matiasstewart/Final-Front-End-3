import { useReducer, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//1. Setting initial state as the gotten item from Storage, or an empty array if Storage is empty

const initialState = {
	favoriteDentists: JSON.parse(localStorage.getItem("favoriteDentists")) || [],
};

//2. Toast notifications: added - removed - all Removed

const notifyAdded = () => {
	toast.info("⭐ Added to favs", {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: "colored",
		className: "toastMessage",
	});
};

const notifyRemoved = () => {
	toast.info("❌ Removed from favs", {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: "colored",
		className: "toastMessage",
	});
};

const notifyAllRemoved = () => {
	toast.info("✨ All favs removed", {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: "colored",
		className: "toastMessage",
	});
};

//3. Reducer function (3 cases: add, remove, remove all)

const reducer = (favsState, action) => {
	switch (action.type) {
		case "ADD_FAVORITE":
			const newFavoriteDentists = [
				...favsState.favoriteDentists,
				action.payload,
			];
			localStorage.setItem(
				"favoriteDentists",
				JSON.stringify(newFavoriteDentists)
			);
			notifyAdded();
			return { ...favsState, favoriteDentists: newFavoriteDentists };
		case "REMOVE_FAVORITE":
			const filteredFavoriteDentists = favsState.favoriteDentists.filter(
				(dentist) => dentist.id !== action.payload.id
			);
			localStorage.setItem(
				"favoriteDentists",
				JSON.stringify(filteredFavoriteDentists)
			);
			notifyRemoved();
			return { ...favsState, favoriteDentists: filteredFavoriteDentists };
		case "REMOVE_ALL_DENTISTS":
			const emptyArray = [];
			localStorage.setItem("favoriteDentists", JSON.stringify);
			notifyAllRemoved();
			return { ...favsState, favoriteDentists: emptyArray };
		default:
			return favsState;
	}
};

//4. Exportable function

const useFavDentists = () => {
	const [favsState, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		//3.a Saves the favorite dentists to localStorage whenever the state changes
		localStorage.setItem(
			"favoriteDentists",
			JSON.stringify(favsState.favoriteDentists)
		);
	}, [favsState.favoriteDentists]);

	//3.b Functionalities to be exported
	const addFavDentist = (dentist) =>
		dispatch({ type: "ADD_FAVORITE", payload: dentist });
	const removeFavDentist = (dentist) =>
		dispatch({ type: "REMOVE_FAVORITE", payload: dentist });
	const removeAllDentists = () => dispatch({ type: "REMOVE_ALL_DENTISTS" });

	return {
		favsState,
		addFavDentist,
		removeFavDentist,
		removeAllDentists,
	};
};

export default useFavDentists;

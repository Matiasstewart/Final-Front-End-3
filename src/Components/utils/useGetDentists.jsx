import { useReducer, useEffect, useMemo } from "react";

//1. Setting initial state
const initialState = {
	dentists: [],
};

//2. Reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case "GET_DENTISTS":
			return { ...state, dentists: action.payload };
		default:
			return state;
	}
};

//3. Exportable function
const useGetDentists = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const getDentists = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);
				const data = await response.json();
				dispatch({ type: "GET_DENTISTS", payload: data });
			} catch (error) {
				console.error(error);
			}
		};

		getDentists();
	}, []);

	const memoizedDentists = useMemo(() => state.dentists, [state.dentists]);

	return { dentists: memoizedDentists };
};

export default useGetDentists;

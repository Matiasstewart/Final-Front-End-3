import { useReducer, useMemo } from "react";

//1. Setting initial state
const initialState = {
	isDark: JSON.parse(localStorage.getItem("darkMode")) || false,
};

//2. Reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case "TOGGLE_THEME":
			localStorage.setItem("darkMode", JSON.stringify(!state.isDark));
			return { isDark: !state.isDark };
		default:
			return state;
	}
};

//3. Exportable function
const useTheme = () => {
	const [darkState, dispatch] = useReducer(reducer, initialState);

	const theme = useMemo(
		() => ({
			backgroundColor: darkState.isDark ? "#111" : "#FFF",
			color: darkState.isDark ? "#FFF" : "#111",
		}),
		[darkState.isDark]
	);

	const toggleTheme = () => {
		dispatch({ type: "TOGGLE_THEME" });
	};

	const isDark = darkState.isDark;

	return { theme, toggleTheme, isDark };
};

export default useTheme;

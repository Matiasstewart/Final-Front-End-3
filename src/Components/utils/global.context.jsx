import { createContext} from "react";
import useFavDentists from "./useFavDentists";
import useGetDentists from "./useGetDentists";
import useTheme from "./useTheme";

export const GlobalContext = createContext(undefined);

const GlobalContextProvider = ({ children }) => {
	//1. API consuming
	const { dentists } = useGetDentists();

	//2. Favorites

	const {
		favsState,
		addFavDentist,
		removeFavDentist,
		removeAllDentists,
	} = useFavDentists();

	//3. Themes

	const { theme, toggleTheme, isDark } = useTheme();

	return (
		<GlobalContext.Provider
			value={{
				dentists,
				favsState,
				addFavDentist,
				removeFavDentist,
				removeAllDentists,
				theme,
				toggleTheme,
				isDark,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;

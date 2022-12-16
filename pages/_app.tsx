import type { AppProps } from "next/app";
import "@/styles/globals.css";
import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";

import "swiper/css";

type AppContextType = {
	user: {
		isUser: boolean;
		setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
	};
};

export const AppContext = createContext({} as AppContextType);

export default function App({ Component, pageProps }: AppProps) {
	const [isUser, setIsUser] = useState(false);

	const DEFAULT_VALUE: AppContextType = { user: { isUser, setIsUser } };

	useEffect(() => {
		console.log(isUser);
	}, [isUser]);

	return (
		<AppContext.Provider value={DEFAULT_VALUE}>
			<Component {...pageProps} />
		</AppContext.Provider>
	);
}

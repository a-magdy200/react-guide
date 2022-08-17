import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import MyFunctionalApp from "./MyFunctionalApp";
import { SecondContext } from "./SecondContext";
import TextComponent from "./TextComponent";
import useMath from "./useMath";

const MyRootApp = () => {
	const { text, setText, x, setX, multiply, divide, root } = useMath();

	return (
		<AppContext.Provider
			value={{
				text,
				setText,
			}}>
			<MyFunctionalApp someText={text} changeSomeText={setText} />
			<h2>{x}</h2>
			<button onClick={multiply}>Multiply</button>

			<button onClick={divide}>divide</button>

			<button onClick={root}>root</button>

			<SecondContext.Provider value={10}>
				<TextComponent />
			</SecondContext.Provider>
		</AppContext.Provider>
	);
};

export default MyRootApp;

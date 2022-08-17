import { useContext } from "react";
import { AppContext } from "./AppContext";
import { SecondContext } from "./SecondContext";

const TextComponent = () => {
	const secondContextValue = useContext(SecondContext);
	const { text } = useContext(AppContext);
	return (
		<div>
			<p>{secondContextValue}</p>
			<p>{text}</p>
		</div>
	);
};
export default TextComponent;

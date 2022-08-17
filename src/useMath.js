import { useState } from "react";

const useMath = () => {
	const [x, setX] = useState(1);
	const [text, setText] = useState("");
	const multiply = () => {
		setX((previous) => previous * 2);
	};
	const divide = () => {
		setX((previous) => previous / 2);
	};
	const root = () => {
		setX((previous) => previous % 2);
	};
	return {
		x,
		setX,
		multiply,
		divide,
		root,
		text,
		setText,
	};
};
export default useMath;

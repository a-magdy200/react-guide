import { Component, Fragment, useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { SecondContext } from "./SecondContext";

// const useCustomHook = () => {
//   const
// }

const MyFunctionalApp = ({ someText, changeSomeText }) => {
	const { text, setText } = useContext(AppContext);
	const secondContextValue = useContext(SecondContext);
	// console.log(secondContextValue);
	// const [myState, setMyState] = useState({
	// 	sayHi: "hi",
	// 	sayBye: "bye",
	// });
	// const [data, setData] = useState([]);
	// const [inputValue, setInputValue] = useState("");
	// useEffect(() => {
	// 	// component did mount
	// 	console.log("mounted");
	// 	setData([1]);
	// 	return () => {
	// 		// component will unmount
	// 		console.log("unmounted");
	// 	};
	// }, []);
	// useEffect(() => {
	// 	// component did mount
	// 	// component did update
	// 	console.log("did mount and did update");
	// 	console.log(someText);
	// 	// setData([2]);
	// 	// return () => {
	// 	// 	console.log("hi");
	// 	// };
	// });
	/*
	useEffect(() => {
		// component did mount
		// component did update
		console.log("did update someText");
	}, [someText]);
	
  useEffect(() => {
		// component did mount
		// component did update
		console.log("did update myState");
	}, [myState]);

	useEffect(() => {
		// component did mount
		// component did update
		console.log("did update either myState or someText");
	}, [someText, myState]);
	// let arr = Object.keys(myState);
	// console.log(arr);
	// arr.forEach((key) => {
	// 	console.log(key, myState[key]);
	// });
  */
	return (
		<div>
			<h1>{text}</h1>
			<input
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
		</div>
	);
};
export default MyFunctionalApp;

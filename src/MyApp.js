import { Component } from "react";
class MyApp extends Component {
	// constructor(props) {
	// 	super(props);
	// 	// console.log("constructor");
	// 	// console.log(this.state);
	// 	this.state = {
	// 		state1: "1",
	// 		state2: "2",
	// 		state3: "3",
	// 	};
	// }

	ahmed() {
		// console.log("ahmed");
	}

	componetWillMount() {
		// console.log("will mount");
	}

	componentDidMount() {
		// console.log("did mount");
		// console.log(this.state);
		console.log(this.props);
		// this.setState((previous) => {
		// 	// console.log("previous ", previous);
		// 	return {
		// 		state1: 4,
		// 	};
		// });
	}

	componentWillUpdate(var1, var2) {
		// console.log(var1, var2);
		// console.log(this.props);
		// console.log("will update");
	}
	componentDidUpdate(var1, var2) {
		// console.log(var1, var2);
		// console.log(this.props);
		if (this.props.someText !== var1.someText) {
			// do something
		}
		console.log("did update");
	}

	componentWillReceiveProps(var1, var2) {
		// console.log(var1, var2);
		// console.log("will receive props");
	}

	componentDidCatch() {
		// console.log("did catch");
	}

	shouldComponentUpdate(var1, var2) {
		// console.log(var1, var2);
		// console.log("should update");
		return true;
	}
	componentWillUnmount() {
		// console.log("will unmount");
	}

	render() {
		// console.log("render");
		this.ahmed();
		console.log(this.state);
		return <h1>hello {this.props.someText}</h1>;
	}
}
export default MyApp;

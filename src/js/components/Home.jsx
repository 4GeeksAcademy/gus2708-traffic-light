import React, { useEffect, useState } from "react";

const Home = () => {
	const [turn, setTurn] = useState("red");
	const [purple, setPurple] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			if (purple) {
				setTurn(prev =>
					prev === "red" ? "green" : prev === "green" ? "purple" : prev === "purple" ? "yellow" : "red"
				);
			} else {
				setTurn(prev =>
					prev === "red" ? "green" : prev === "green" ? "yellow" : "red"
				);
			};

		}, 3000,);

		return () => clearInterval(interval);
	}, [purple]);

	useEffect(() => {
		document.documentElement.style.setProperty("--selected-color", turn);
	}, [turn]);

	return (
		<div className="container-fluid d-flex align-items-center flex-column">
			<div className="trafficLightBase"></div>
			<div className="trafficLight d-flex justify-content-evenly flex-column align-items-center">
				<div
					className={`red light ${turn === "red" ? "selected" : ""}`}
					onClick={() => setTurn("red")}
				></div>
				<div
					className={`yellow light ${turn === "yellow" ? "selected" : ""}`}
					onClick={() => setTurn("yellow")}
				></div>
				<div
					className={`green light ${turn === "green" ? "selected" : ""}`}
					onClick={() => setTurn("green")}
				></div>
				{purple == true ?
					<div
						className={`purple light ${turn === "purple" ? "selected" : ""}`}
						onClick={() => setTurn("purple")}
					></div> : ""}
			</div>
			<div className="container-fluid mt-2 d-flex justify-content-center">
				<button 
					type="button"
					className="btn btn-outline-primary purple"
					onClick={() => {
						setPurple(!purple)
						purple === true ? setTurn("red") : "";
					}}
				>Purple Button?</button>
			</div>
		</div>
	);
};

export default Home;
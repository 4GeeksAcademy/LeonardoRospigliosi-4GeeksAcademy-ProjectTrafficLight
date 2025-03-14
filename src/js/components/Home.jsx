import React, { useEffect, useState } from "react";


import Semaforo from "./Semaforo.jsx";
import Otros from "./Otros.jsx";


//create your first component
const Home = () => {

	return (
		<div className="text-center">
			<Semaforo />
			{/* <Otros /> */}
		</div>
	);
};

export default Home;
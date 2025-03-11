import React, { useEffect, useState } from "react";


import Semaforo from "./Semaforo.jsx";

//create your first component
const Home = () => {

	const [contador, setContador] = useState(0);
	const [nombre, setNombre] = useState("Juan");
	const [edad, setEdad] = useState(20);
	const [hora, setHora] = useState(new Date());

	const [claseCSS, setClaseCSS] = useState("bg-primary");

	const [color, setColor] = useState('text-white');

	const [seleccionado, setSeleccionado] = useState("text-white");


	useEffect(() => {
		console.log("useEffect sin dependencia - 'Renderizado'");
	});

	useEffect(() => {
		// 		const idInterval = setInterval(()=>{
		// 			setHora(new Date())
		// 		}, 1000);
		// 
		// 		return () => clearInterval(idInterval);

		console.log("useEffect con dependencia vacia - 'Componente montado'");
	}, []);

	useEffect(() => {
		console.log("useEffect con dependencia 'contador'", contador);
	}, [contador]);


	return (
		<div className="text-center">
			<Semaforo />



			<h2>Otros Practicando en Clase</h2>
			<p>Nombre: {nombre}</p>
			<p>Edad: {edad}</p>
			<p>Contador: {contador}</p>
			<p>La hora actual es: {hora.toLocaleTimeString()}</p>

			<button onClick={() => { setContador(contador + 1) }}>Incrementar</button>
			<button onClick={() => { setContador(contador - 1) }}>Decrementar</button>

			<div className={`mt-5 ${claseCSS}`} >
				<div className={`bg-danger ${seleccionado == 'bg-danger' ? 'text-white' : ''}`}
					onClick={() => { setSeleccionado("bg-danger") }}>LUZ ROJA</div>

				<div className={`bg-warning ${seleccionado == 'bg-warning' ? 'text-white' : ''}`} onClick={() => { setSeleccionado("bg-warning") }}>LUZ AMARILLA</div>

				<div className={`bg-success ${seleccionado == 'bg-success' ? 'text-white' : ''}`} onClick={() => { setSeleccionado("bg-success") }}>LUZ VERDE</div>
			</div>

		</div>
	);
};

export default Home;
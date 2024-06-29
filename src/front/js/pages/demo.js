import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import form from "../../img/Gast2.png"

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);
    const [contraseña, setContraseña] = useState("")
    const [nombreDeLista, setNombreDeLista] = useState("")
	const navigate = useNavigate();
	
	function crearLista(e){
		e.preventDefault()
		actions.crearLista(nombreDeLista, contraseña)
		
		// actions.crearLista(nombreDeLista, contraseña)
		// console.log(contraseña, nombreDeLista);

	}

	useEffect(()=>{
		console.log(store.navigate);
		store.navigate ? navigate('/gast/'+ store.navigate) : null;
		store.navigate = false
	},[store.navigate])

	return (
		<div className="text-center bg-black fullscreen-container ">
			<div className="text-center mx-auto py-5 bg-white w-25">
				<img className="form" src={form}/>
				<h5>Crear nueva Lista de Gastos</h5>
				<form onSubmit={crearLista}>
					<li>Nombre de Lista</li>
					<input type="text" onChange={event => setNombreDeLista(event.target.value)}/>
					<li>Contraseña</li>
					<input type="password" onChange={event => setContraseña(event.target.value)}/><br/>
					<button type="submit">Crear</button>
				</form>
				<Link to="/"><button>Volver a iniciar sessión</button></Link>
			</div>
		</div>
	);
};

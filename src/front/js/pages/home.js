import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import form from "../../img/Gast2.png"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [contraseña, setContraseña] = useState("")
    const [nombreDeLista, setNombreDeLista] = useState("")
	const navigate = useNavigate();
	
	function iniciarLista(e){
		e.preventDefault()
		actions.loginLista(nombreDeLista, contraseña)
		
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
				<h5>Iniciar Sessión</h5>
				<form onSubmit={iniciarLista}>
					<li>Nombre de Lista</li>
					<input type="text" onChange={event => setNombreDeLista(event.target.value)}/>
					<li>Contraseña</li>
					<input type="password" onChange={event => setContraseña(event.target.value)}/><br/>
					<button type="submit">Iniciar</button>
				</form>
				<Link to="/demo"><button>Crear una Nueva Lista de Gastos</button></Link>
			</div>
		</div>
	);
};

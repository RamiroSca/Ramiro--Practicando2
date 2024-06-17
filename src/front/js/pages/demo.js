import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import form from "../../img/Gast2.png"

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center bg-black fullscreen-container ">
			<div className="text-center mx-auto py-5 bg-white w-25">
				<img className="form" src={form}/>
				<h5>Crear nueva Lista de Gastos</h5>
				<form>
					<li>Nombre de Lista</li>
					<input type="text"/>
					<li>Contraseña</li>
					<input type="password"/><br/>
					<button>Crear</button>
				</form>
				<Link to="/"><button>Volver a iniciar sessión</button></Link>
			</div>
		</div>
	);
};

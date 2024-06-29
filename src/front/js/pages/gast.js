import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, Navigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import form from "../../img/Gast2.png"
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { useNavigate } from 'react-router-dom';

export const Gast = () => {
	const { store, actions } = useContext(Context);
	const params = useParams()
	const navigate = useNavigate();

	useEffect(()=>{
		actions.verificacionToken(params.lista)
	},[])
	console.log(store.token);

	useEffect(()=>{
		if(store.token=="error"){
			navigate('/')
		}
		store.token=null
	},[store.token])
	
	// console.log(params.lista);
	return (
		<div className="bg-black m-0">
			<div className="container ">
				<div className="mx-auto naranja mb-1 p-2 w-75 ">
					<h1>Ingresos</h1>
					<div className="text-end">
						<button type="button" class="btn btn-outline-dark border border-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
							+
						</button>
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
											...
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											<button type="button" class="btn btn-primary">Understood</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto bg-success mb-1 p-2 w-75 ">
					<h1>Comida</h1>
					<div className="text-end">
						<button type="button" class="btn btn-outline-dark border border-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
							+
						</button>
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
											...
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											<button type="button" class="btn btn-primary">Understood</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto bg-danger my-1 p-2 w-75 ">
					<h1>Alquiler</h1>
					<div className="text-end">
						<button type="button" class="btn btn-outline-dark border border-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
							+
						</button>
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
											...
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											<button type="button" class="btn btn-primary">Understood</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto bg-warning my-1 p-2 w-75 ">
					<h1>Suministros</h1>
					<div className="text-end">
						<button type="button" class="btn btn-outline-dark border border-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
							+
						</button>
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
											...
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											<button type="button" class="btn btn-primary">Understood</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto bg-primary my-1 p-2 w-75 ">
					<h1>Ocio</h1>
					<div className="text-end">
						<button type="button" class="btn btn-outline-dark border border-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
							+
						</button>
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
											...
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											<button type="button" class="btn btn-primary">Understood</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto bg-info mt-1 p-2 w-75 ">
					<h1>Ocio</h1>
					<div className="text-end">
						<button type="button" class="btn btn-outline-dark border border-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
							+
						</button>
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
											...
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											<button type="button" class="btn btn-primary">Understood</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto violeta mt-1 p-2 w-75 ">
					<h1>Totales</h1>
					<div className="text-end">
						<button type="button" class="btn btn-outline-dark border border-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
							+
						</button>
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
											...
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											<button type="button" class="btn btn-primary">Understood</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
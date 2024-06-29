const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			navigate: false,
			token: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend 
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			crearLista: async (nombreDeLista, contraseña) => {
				console.log(nombreDeLista,contraseña);
				try{
					// fetching data from the backend 
					const response = await fetch(process.env.BACKEND_URL + '/api/lista', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							"list_name": nombreDeLista,
							"password": contraseña,
						})
					})
					const data = await response.json()
					console.log(data);
					console.log(response.status);
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					if(response.status == 420){
						return "El nombre de lista esta en uso"
					} else if(response.status==200){
						setStore({navigate:nombreDeLista})
						getActions().loginLista(nombreDeLista,contraseña)
					}
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			loginLista: async (nombreDeLista, contraseña) => {
				console.log(nombreDeLista,contraseña);
				try{
					// fetching data from the backend 
					const response = await fetch(process.env.BACKEND_URL + '/api/lista-login', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							"list_name": nombreDeLista,
							"password": contraseña,
						})
					})
					const data = await response.json()
					console.log(data);
					console.log(response.status);
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					if(response.status == 404){
						return "El nombre de lista esta incorrecto"
					} else if(response.status==200){
						setStore({navigate:nombreDeLista})
						localStorage.setItem('token', data.token)
					} else if(response.status==401){
						return "El nombre de lista o la contraseña es incorrecto"
					}
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},

			verificacionToken: async function (param) {
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/protected', {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + localStorage.getItem("token")
						}
					})
					const data = await response.json()
					console.log(data);
					console.log(response.status);
					if (response.status == 200) {
						// setStore({ nombreDeUsuario: data.user.username })
						// console.log(param);
						// console.log(data.user.list_name);
						if(data.user.list_name==param){
							return true
						} else {
							localStorage.removeItem("token");
							// window.location.reload()
							setStore({token:"error"})
						}
					} else if (response.status == 422) {
						localStorage.removeItem("token");
						setStore({token:"error"})
					} else if (response.status == 401) {
						localStorage.removeItem("token");
						setStore({token:"error"})
						// window.location.reload()
					}
					return true
				} catch (error) {
					console.error(err)

				}
			},
		}
	};
};

export default getState;

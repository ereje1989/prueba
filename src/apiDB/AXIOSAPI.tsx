import React from 'react';
import axios from 'axios';


export default function AXIOSAPI() {
    //function para obtener usuarios
    const getUsers = async () => {    //async por ser una petición http
        try {
            const url = "https://raw.githubusercontent.com/Juan4678/demo/2ad091b3fcc93a0e2fe12c2fd54cea2a5ada1d57/users_prueba"; //se le pasa la url donde se hará la petición
            const response = await axios.get(url)  //respuesta a la petición de tipo get
            console.log(response.data)
        } catch (error) {    //si la petición da error
            console.error(error)
        }
    }
    const createPost = async () => {
        try {
            const url = "https://raw.githubusercontent.com/Juan4678/demo/2ad091b3fcc93a0e2fe12c2fd54cea2a5ada1d57/users_prueba"
            //Cuando necesitamos un dato hay que mandarle el dato a crear:
            const body = {
                id: '1',
                title: 'Usuarios del servicio',
                body: 'Clientes de RRuta y SOS',
                userId: '1',
            }
            const response = await axios.post(url, body);
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
    /*
    axios.post('https://example.com/api/data', {
        answer: 42
    })
        .then(response => {
            console.log(response.data);
        });
    */
    return (
        <div>
            <h1>HTTP - Axios</h1>
            <button onClick={getUsers}>Get Users</button>
            <button onClick={createPost}>Create Post</button>
        </div>
    );
}
import { generateUser, generatePets } from "../utils/index.js";
import { usersService, petsService } from "../services/index.js";


const insertUsers = async (users) =>{
        try {
            for(let i=0; i < users.length; i++){
                await usersService.create(users[i]);
            }
        } catch (error) {
            console.log(error)
            return false;
        }
        return true;
}

const insertPets = async (pets) =>{
        try {
            for(let i=0; i < pets.length; i++){
                await petsService.create(pets[i]);
            }
        } catch (error) {
            console.log(error)
            return false;
        }
        return true;
}


export const getUsers = async (req, res) => {
    // Simulacion de peticion a una API ( libreria Fasker)
    try {
        let users = await generateUser(req.params?.numUsers);
        res.send({ status: "success", payload: users });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los usuarios:" });
    }
}

export const getPets = async (req, res) => {
    // Simulacion de peticion a una API ( libreria Fasker)
    try {
        let pets = await generatePets(req.params?.numPets);
        res.send({ status: "success", payload: pets });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener las mascotas:" });
    }
}


export const generateData = async (req,res) =>{
    // insersion en la base de datos
    try {
        const numUsers = req.params.users
        const numPets = req.params.pets
        let users = await generateUser(numUsers);
        let pets = await generatePets(numPets);
        
        if(!await insertUsers(users)){
            res.status(500).send({ error: "error", message: "Fallo al insertar usuarios:" });
        }else{console.log(`Se crearon ${numUsers} usuarios`)}

        if(!await insertPets(pets)){
            res.status(500).send({ error: "error", message: "Fallo al insertar mascotas:" });
        }else{console.log(`Se crearon ${numPets} mascotas`)}
        
        res.status(200).send({status:"success", payload:{ users:users,pets:pets}});

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudieron insertar datos:" });
    }
}
import { Router } from "express";
import { getUsers,getPets, generateData } from '../controllers/mocks.controller.js';



const router = Router();


router.get('/mockingusers/:numUsers', getUsers);
router.get('/mockingpets/:numPets', getPets);
router.post('/generateData/:users/:pets',generateData)

export default router;
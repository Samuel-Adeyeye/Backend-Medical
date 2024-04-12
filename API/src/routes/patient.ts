import {Router} from 'express'
import { createPatient, deletePatient, getPatients, updatePatient } from '../Controllers/patients';


const router = Router();

router.post('/', createPatient);
router.delete('/:id', deletePatient);
router.get('/', getPatients);
router.put('/:id', updatePatient);


export default router;
import { Router } from 'express';
import { deleteUser, getUsers, login, signUp } from '../Controllers/users';


const router = Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/', getUsers);
router.delete('/:id', deleteUser);


export default router;
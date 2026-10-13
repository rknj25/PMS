import express from 'express';
import { login, register } from '../controller/userAuth.js';
const router=express.Router();

router.post('/add',register);
router.post('/login',login);

export default router;
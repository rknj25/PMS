
import express from 'express';
import {
  addpro,
  deletePro,
  getpro,
  getSinglePro,
  updatePro
} from '../controller/proAuth.js';

import upload from '../middleware/proUpload.js';

const router = express.Router();

router.post('/add', upload.single('image'), addpro);
router.get('/get', getpro);
router.get('/get/:id', getSinglePro);
router.delete('/del/:id', deletePro);
router.put('/upd/:id', updatePro);

export default router;

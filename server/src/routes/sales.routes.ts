import { Router } from 'express'
const router = Router();

import { createSale, getLastIdSale, getSalesByCustomerId } from '../controllers/sales.controller'

router.post('/sales/create', createSale); 
router.get('/sales/lastIdSale', getLastIdSale);
router.get('/sales/customer/:id_user', getSalesByCustomerId);  

export default router;
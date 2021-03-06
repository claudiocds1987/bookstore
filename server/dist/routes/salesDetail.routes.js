"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const salesDetail_controller_1 = require("../controllers/salesDetail.controller");
router.post('/salesDetail/create', salesDetail_controller_1.createSaleDetail);
router.get('/salesDetail/:id_sale', salesDetail_controller_1.getSaleDetail);
exports.default = router;

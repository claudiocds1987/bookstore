import { Router } from "express";
const router = Router();

import {
  countSalesFromMonth,
  salesRevenueByYearAndMonth,
  countSalesFromYear,
  salesRevenueFromYear,
  getAnnualSales,
  getBookTopSales,
  createSale,
  getLastIdSale,
  getSalesByCustomerId,
} from "../controllers/sales.controller";

router.post("/sales/create", createSale);
router.get("/sales/lastIdSale", getLastIdSale);
router.get("/sales/customer/:id_user", getSalesByCustomerId);
router.get("/sales/countFromMonth/:year/:month", countSalesFromMonth);
router.get("/sales/revenueByYearAndMonth/:year/:month", salesRevenueByYearAndMonth);
router.get("/sales/countFromYear/:year", countSalesFromYear);
router.get("/sales/revenueFromYear/:year", salesRevenueFromYear);
router.get("/sales/bookTopSales", getBookTopSales);
router.get("/sales/annualSales/:year", getAnnualSales);

export default router;

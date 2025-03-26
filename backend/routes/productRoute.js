import express from "express";
import { createProduct, getAllProducts, getLandingPageProducts, getProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.get("/landingPageProducts", getLandingPageProducts);
router.post("/create", createProduct);

export default router;
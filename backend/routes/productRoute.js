import express from "express";
import { createProduct, getAllProducts, getLandingPageProducts, getProduct, getSimilarProducts } from "../controllers/productController.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/", getAllProducts);
router.get("/landingPageProducts", getLandingPageProducts);
router.get("/getSimilarProducts", getSimilarProducts);
router.get("/:id", getProduct);

export default router;
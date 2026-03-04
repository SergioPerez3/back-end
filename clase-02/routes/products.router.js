import { Router } from "express";

const router = Router();

import {
  createProduct,
  getProductById,
  getProducts,
} from "../controllers/products.controller.js";

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 20 },
];

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);

export default router;

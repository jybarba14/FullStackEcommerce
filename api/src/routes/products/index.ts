import { Router } from "express";
import { listProducts, getProductById, createProduct, updateProduct, deleteProduct } from "./productsController.js";
import { validateData } from "../../middlewares/validationMiddleware.js";

import { createProductSchema, updateProductSchema } from "../../db/productsSchema.js";
import { verifySeller, verifyToken } from "../../middlewares/authMiddleware.js";

// const createProductSchema = z.object({
//     name: z.string(),
//     price: z.number({ message: 'Price should be a number' }),
// });

// type ProductType = z.infer<typeof createProductSchema>;


//products endpoints
const router = Router();

router.get('/', listProducts);
router.get('/:id', getProductById);
router.post('/', verifyToken, verifySeller, validateData(createProductSchema), createProduct);
router.put('/:id', verifyToken, verifySeller, validateData(updateProductSchema), updateProduct);
router.delete('/:id', verifyToken, verifySeller, deleteProduct);

export default router;
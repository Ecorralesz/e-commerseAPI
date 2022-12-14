const { Router } = require("express")
const productsController = require("../controllers/products.controller")

const router = Router()

router.get("/products", productsController.findAll)

router.get("/products/:id", productsController.findById)
router.get("/products/:id/buy", productsController.findBuyByProduct)
router.post("/products", productsController.create)
router.post("/products/buy", productsController.buy)
router.patch("/products/:id", productsController.update)
router.patch("/products/:id/add_features", productsController.addFeatures)
router.patch("/products/:id/set_category", productsController.setCategory)
router.delete("/products/:id", productsController.delete)

module.exports = router
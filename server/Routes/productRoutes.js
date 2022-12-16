const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  addArticle,
  modifyArticle,
  deleteArticle,
  allArticles,
  myArticles,
} = require("../controllers/productController");

router.post("/add", authMiddleware, addArticle);
router.put("/:id", authMiddleware, modifyArticle);
router.delete("/:id", authMiddleware, deleteArticle);
router.get("/", allArticles);
router.post("/my", authMiddleware, myArticles);

module.exports = router;

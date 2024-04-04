const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const articleControllers = require("./controllers/articleControllers");
const readerControllers = require("./controllers/readerControllers");
const authControllers = require("./controllers/authControllers");

const articleMiddlewares = require("./middlewares/articleMiddlewares");
const authMiddlewares = require("./services/auth");

router.get("/items", itemControllers.browse);

router.get("/items/:id", itemControllers.read);

router.post("/items", itemControllers.add);

router.get("/articles", authMiddlewares.verifyToken, articleControllers.browse);

router.get("/articles/:id", articleControllers.read);

router.post(
  "/articles",
  articleMiddlewares.validateArticleInfos,
  articleControllers.add
);

router.put("/articles/:id", articleControllers.update);

router.delete("/articles/:id", articleControllers.destroy);

router.get("/readers", readerControllers.browse);

router.post("/readers", authMiddlewares.hashPassword, readerControllers.add);
router.get("/readers/:id", readerControllers.read);

router.post("/login", authControllers.login);
router.delete("/logout", authControllers.disconnected);

module.exports = router;

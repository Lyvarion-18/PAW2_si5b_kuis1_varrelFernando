const express = require("express");
const router = express.Router();

const museumController = require("../controllers/museumController");
const cekApiKey = require("../middlewares/cekApiKey");

router.get("/", museumController.getAllCollections);

router.get("/:id", museumController.getCollectionById);

router.post("/", cekApiKey, museumController.createCollection);

router.put("/:id", cekApiKey, museumController.updateCollection);

router.delete("/:id", cekApiKey, museumController.deleteCollection);

module.exports = router;
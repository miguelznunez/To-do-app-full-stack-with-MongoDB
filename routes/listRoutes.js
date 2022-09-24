const express = require("express")
const router = express.Router()
const { getList,
        addItem,
        updateItem,
        deleteItem,
      } = require("../controller/listController")

router.get("/", getList)

router.get("/addItem", addItem)

router.get("/updateItem", updateItem)

router.get("/deleteItem", deleteItem)

module.exports = router

/*
  Router მართავს URL-ებს და HTTP მეთოდებს
  აქ ვუკავშირებთ route-ს controller-ს
*/

const express = require("express");
const router = express.Router();

const {
    getPhones,
    getPhoneById,
    addPhone,
    updatePhone,
    deletePhone
} = require("../controllers/phones.controller");

const bodyChecker = require("../middlewares/bodyChecker");
const logger = require("../middlewares/logger");

// ყველა ტელეფონი
router.get("/", logger, getPhones);

// ტელეფონი id-ით
router.get("/:id", logger, getPhoneById);

// ახალი ტელეფონი (body checker middleware)
router.post("/", logger, bodyChecker, addPhone);

// განახლება
router.put("/:id", logger, bodyChecker, updatePhone);

// წაშლა
router.delete("/:id", logger, deletePhone);

module.exports = router;

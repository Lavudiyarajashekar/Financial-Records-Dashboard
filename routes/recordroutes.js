const express = require("express");
const router = express.Router();
const { getAnalytics } = require("../controllers/recordcontroller");
const {
  createRecord,
  getRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordcontroller");

// Routes
router.post("/", createRecord);
router.get("/", getRecords);
router.get("/analytics", getAnalytics);
router.get("/:id", getRecordById);
router.put("/:id", updateRecord);
router.delete("/:id", deleteRecord);

module.exports = router;
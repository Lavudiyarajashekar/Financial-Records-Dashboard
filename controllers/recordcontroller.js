const Record = require("../models/recordmodel");
const asyncHandler = require("../middleware/asynchandler");

// Create Record
const createRecord = asyncHandler(async (req, res) => {
  const { amount, type, category, date } = req.body;

  if (!amount || !type || !category || !date) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  const record = await Record.create(req.body);
  res.status(201).json(record);
});

// Get All Records (with filtering)
const getRecords = asyncHandler(async (req, res) => {
  let filter = {};

  if (req.query.type) filter.type = req.query.type;
  if (req.query.category) filter.category = req.query.category;

  if (req.query.startDate && req.query.endDate) {
    filter.date = {
      $gte: new Date(req.query.startDate),
      $lte: new Date(req.query.endDate),
    };
  }

  const records = await Record.find(filter).sort({ date: -1 });
  res.json(records);
});

//  Get Single Record
const getRecordById = asyncHandler(async (req, res) => {
  const record = await Record.findById(req.params.id);

  if (!record) {
    res.status(404);
    throw new Error("Record not found");
  }

  res.json(record);
});

//  Update Record
const updateRecord = asyncHandler(async (req, res) => {
  const record = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!record) {
    res.status(404);
    throw new Error("Record not found");
  }

  res.json(record);
});

//  Delete Record
const deleteRecord = asyncHandler(async (req, res) => {
  const record = await Record.findByIdAndDelete(req.params.id);

  if (!record) {
    res.status(404);
    throw new Error("Record not found");
  }

  res.json({ message: "Record deleted successfully" });
});



// Get Analytics
const getAnalytics = asyncHandler(async (req, res) => {
  const records = await Record.find();

  let totalIncome = 0;
  let totalExpense = 0;

  records.forEach((r) => {
    if (r.type === "income") totalIncome += r.amount;
    else totalExpense += r.amount;
  });

  res.json({
    totalIncome,
    totalExpense,
    balance: totalIncome - totalExpense,
  });
});


module.exports = {
  createRecord,
  getRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
  getAnalytics,
};
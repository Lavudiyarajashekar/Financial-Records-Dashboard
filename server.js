const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config");
const recordRoutes = require("./routes/recordroutes");

const { notFound, errorHandler } = require("./middleware/errormiddleware");

dotenv.config();

//CONNECT DATABASE
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/records", recordRoutes);
app.use(notFound);
app.use(errorHandler);

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
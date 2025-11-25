require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const lockerRoutes = require("./routes/lockerRoutes");
const hardwareInventoryRoutes = require("./routes/hardwareInventoryRoutes");
const accessoryRoutes = require("./routes/accessoryRoutes");
const historyRoutes = require("./routes/historyRoutes");
const hardwareDataRoutes = require("./routes/hardwareDataRoutes");
const analyzeQueryRoutes = require('./routes/analyzeQueryRoutes');
const manufacturerRoutes = require('./routes/manufacturerRoutes');
const locationRoutes = require('./routes/locationRoutes');
const hardwareStatusRoutes = require('./routes/hardwareStatusRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes); 
app.use("/employees", employeeRoutes);
app.use("/lockers", lockerRoutes);
app.use("/hardware_inventory", hardwareInventoryRoutes);
app.use("/accessories", accessoryRoutes);
app.use("/histories", historyRoutes);
app.use("/hardware_data", hardwareDataRoutes);
app.use('/analyze', analyzeQueryRoutes);
app.use('/manufacturers', manufacturerRoutes);
app.use('/locations', locationRoutes);
app.use('/hardware-statuses', hardwareStatusRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}
  über http://localhost:5000/users abrufen`));

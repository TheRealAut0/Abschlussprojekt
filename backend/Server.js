require("dotenv").config();
const express = require("express");
const cors = require("cors");
const verifyToken = require('./middleware/authMiddleware');

const authRoutes = require("./routes/authRoutes");
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
const roleRoutes = require('./routes/roleRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// ========== Routes ohne Auth ==========
app.use('/auth', authRoutes);                    // Login/Auth — KEIN Token nötig
app.post('/users', userRoutes);                  // Registrierung (POST) — KEIN Token nötig
app.use('/roles', roleRoutes);                   // Rollen — KEIN Token nötig

// ========== Global Auth-Middleware ab hier ==========
app.use('/users', userRoutes);    // POST ohne Auth, andere mit Auth (handled in Route)
app.use(verifyToken);             // Global für andere Routes

// ========== Routes mit Auth ==========
app.use('/users', userRoutes);                   // GET/PUT/DELETE — Token erforderlich
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

module.exports = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = require("./routes/index");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = process.env.PORT || 5000;
app.use('api/diagnosis', index_1.diagnosisRoute);
app.use('api/patients', index_1.patientRoute);
app.use('api/users', index_1.userRoute);
app.use('api/appointments', index_1.appointmentRoute);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use((err, req, res, next) => {
    if (err.message) {
        res.status(500).json({ error: err.message });
    }
});

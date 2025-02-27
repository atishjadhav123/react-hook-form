"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// ✅ Correct CORS setup
app.use((0, cors_1.default)({
    origin: "https://react-hook-form-g9q9-client.vercel.app", // Your frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
// ✅ Manually set headers (in case middleware isn't applied)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://react-hook-form-g9q9-client.vercel.app");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
// ✅ Handle OPTIONS requests (preflight)
app.options("*", (req, res) => {
    res.status(200).end();
});
// ✅ Test Route
app.get("/api/getdata", (req, res) => {
    res.json({ message: "CORS working!" });
});
// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

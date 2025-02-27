import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Correct CORS setup
app.use(
    cors({
        origin: "https://react-hook-form-g9q9-client.vercel.app", // Your frontend URL
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// ✅ Manually set headers (in case middleware isn't applied)
app.use((req: Request, res: Response, next: NextFunction) => {
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

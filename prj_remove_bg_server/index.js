import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/mongosee";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

await connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

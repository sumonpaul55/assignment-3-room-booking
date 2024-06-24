import express from "express";
import cors from "cors";
import router from "./app/routes";

const app = express();
app.use(cors());
app.use(express.json());

// application route
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hi, this is Room Booking Server 😁😀!");
});

export default app;

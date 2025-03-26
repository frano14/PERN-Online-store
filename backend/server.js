import express from "express";
import cors from "cors";
import  productRoutes  from "./routes/productRoute.js";

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE', 
  }));

app.use("/api/product", productRoutes);

app.get("/", (req, res) => {
    res.send("Hello from the backendd");
})

app.listen(5000, () => console.log("Server running on port 5000"));

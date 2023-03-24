import express from "express";
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

const app = express();
import dotenv from "dotenv";
dotenv.config()

connectDB()

app.get("/", function(req, res){
    res.send("API is running")
})

app.use("/api/products", productRoutes)

app.use(notFound)

app.use(errorHandler)




const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`server setup at ${process.env.NODE_ENV} mode at port ${PORT}`))
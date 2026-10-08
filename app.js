require("dotenv").config();

const express = require("express");
const cors = require("cors");

const museumRoutes = require("./routes/museumRoutes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());

app.use("/museum-collections", museumRoutes);

app.use((req, res, next) => {
    const error = new Error("Endpoint tidak ditemukan");
    error.status = 404;
    next(error);
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
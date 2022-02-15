const express = require("express");
const cors = require("cors");

const dogsRouter = require("./routers/dogsRouter");
const addDogRouter = require("./routers/addDogRouter");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/dogs", dogsRouter);
app.use("/addDog", addDogRouter);

app.get("/", (req, res) => {
    res.send("<h1>Hello from Express!</h1>");
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

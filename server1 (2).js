const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json()); 


app.get("/", (req, res) => {
    res.json({ message: "Welcome to our API!" });
});


app.post("/users", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required!" });
    }
    res.json({ message: "User data received", user: { name, email } });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "This is a message from the Express server!" });
});

app.post("/echo", (req, res) => {
  const { name } = req.body;
  res.json({ reply: `Hello, ${name || "stranger"}!` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

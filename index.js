const express = require('express');
const bodyParser = require('body-parser');
const {fillPDF} = require('./abc');

const app = express();
const PORT = 8080;

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.get("/downloadPDF", (req, res) => { 
  res.download("output.pdf"); 
});
app.post("/", async (req, res) => {
  try {
    const {name,dob} = req.body;
    date=dob.split("-").reverse().join("-");
    const pdf = await fillPDF(name.toUpperCase(), date);
    console.log("chal rha hai");
    res.status(200).json({
      pdf,
    });
  } catch (error) {
    console.error("Error fetching logs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


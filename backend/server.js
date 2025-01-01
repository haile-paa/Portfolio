require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize the app
const app = express();
const port = process.env.PORT || 4000; // Use environment variable for port

// Use middleware
app.use(cors());
app.use(express.json()); // Use native JSON parser

// MongoDB connection using DB_URL from .env
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a Mongoose schema for the form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  description: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Create the route to save the contact form data
app.post("/api/contact", async (req, res) => {
  const { name, email, description } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      description,
    });

    await newContact.save();
    res.json({ success: true, message: "Form submitted successfully!" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Error saving form data!" });
  }
});

// Create an admin route to fetch all submitted form data
app.get("/api/admin/messages", async (req, res) => {
  try {
    const messages = await Contact.find();
    res.json({ success: true, data: messages });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Error fetching messages!" });
  }
});

// Start the server using the port from .env
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

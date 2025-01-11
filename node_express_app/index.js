const express = require("express");
const app = express();
const path = require("path"); // For resolving paths
const userRoutes = require("./routes/users"); // Import user routes

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

// Serve static files (e.g., index.html)
app.use(express.static(path.join(__dirname, "public"))); // To serve static files from the 'public' folder

// Use the user routes
app.use("/", userRoutes);

// Start the server
app.listen(9000, () => {
  console.log("Server is running on http://localhost:9000");
});

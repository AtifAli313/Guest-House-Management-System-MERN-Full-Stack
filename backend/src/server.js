require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

// Connect to Database
connectDB();

// IMPORTANT: Vercel handles the port. 
// We only listen if we are NOT on Vercel (local development).
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the app for Vercel's serverless handler
module.exports = app;

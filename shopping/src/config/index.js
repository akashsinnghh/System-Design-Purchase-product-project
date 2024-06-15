const dotenv = require("dotenv");

// Trim the NODE_ENV value to remove any trailing spaces
const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "dev";

console.log("NODE_ENV:", `"${nodeEnv}"`);

if (nodeEnv !== "prod") {
  const configFile = `./.env.${nodeEnv}`;
  console.log(`Attempting to load environment variables from ${configFile}`);
  const result = dotenv.config({ path: configFile });
  console.log(`Loaded environment variables from ${configFile}`);
  console.log("mongo url:", process.env.PORT);
} else {
  console.log("Attempting to load environment variables from .env");
  const result = dotenv.config();
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};

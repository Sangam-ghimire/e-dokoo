const app = require("./app");

const dotenv = require("dotenv");

//setting up config file

dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.Port, () => {
  const port = process.env.port;
  const mode = process.env.NODE_ENV;
  console.log("Server started on PORT",process.env.port);
  console.log("Operating on mode:",process.env.NODE_ENV);
});

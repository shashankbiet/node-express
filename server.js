const app = require("./app");
const logger = require("./config/logger");
require("dotenv").config();

//Setting up server
const port = process.env.PORT || 3001;
app.listen(port, () => logger.info(`Listening on port ${port}`));

const app = require('./app');

//Setting up server
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const createServer = require("http").createServer;
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

fs.readdirSync(path.join(__dirname))
  .filter(
    file =>
      file.indexOf(".") !== 0 &&
      file.indexOf("utils") === -1 &&
      file.indexOf("index") === -1 &&
      file.slice(-3) === ".js"
  )
  .forEach(file => {
    console.log(`adding route ${file}`);
    require(path.join(__dirname, file))(app);
  });

const ws = createServer(app);

ws.listen(3001, () => {
  console.log(`done api ${new Date()}`);
  console.log(`App listening on port:${3001}`);
});

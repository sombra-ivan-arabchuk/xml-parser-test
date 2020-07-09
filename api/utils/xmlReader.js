const fs = require("fs");
const parser = require("fast-xml-parser");

const { messages } = require("./logMessages");

const readJsonFromXML = async path => {
  try {
    const buffer = await fs.readFileSync(`${process.cwd()}${path}`);
    return parser.parse(buffer.toString());
  } catch {
    // used simple console tool to have initial Logging
    // could be used some another library after discussing with team
    console.error(messages.readFileError);
    throw Error(messages.readFileError);
  }
};

module.exports = {
  readJsonFromXML: readJsonFromXML
};

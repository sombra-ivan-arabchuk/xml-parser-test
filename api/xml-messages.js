const readJsonFromXml = require("./utils/xmlReader").readJsonFromXML;
const { formatMessagesData } = require("./helpers/dataFormatters");

module.exports = app => {
  app.get("/xml-messages", async (req, res) => {
    try {
      // this data is ready to be saved to database
      // for now let's just send it as response to client
      const jsonData = await readJsonFromXml("/api/CodeTest-XML.xml");
      res.status(200).json({ data: formatMessagesData(jsonData) });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
};

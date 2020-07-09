const { formatMessagesData } = require("../../helpers/dataFormatters");
const readJsonFromXml = require("../../utils/xmlReader").readJsonFromXML;
const { messages } = require("../../utils/logMessages");

describe("formatMessagesData()", () => {
  it("check for data that will be represented for response", async () => {
    const jsonData = await readJsonFromXml("/api/CodeTest-XML.xml");
    expect(formatMessagesData(jsonData)).toMatchSnapshot();
  });

  it("check error case", async () => {
    // let's specify incorrect path and check the response
    try {
      await readJsonFromXml("/api/CodeTest-1XML.xml");
    } catch (e) {
      expect(e.message).toEqual(messages.readFileError);
    }
  });
});

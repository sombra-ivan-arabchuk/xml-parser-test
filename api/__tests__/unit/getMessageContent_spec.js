const { getMessageContent } = require("../../helpers/dataFormatters");

const mockData = {
  Message: "test message"
};

const differentObjectData = {
  Message: {
    "#text": "another test message"
  }
};

describe("getMessageContent()", () => {
  it("check for mapping of different objects", () => {
    expect(getMessageContent(mockData)).toEqual(mockData["Message"]);
    expect(getMessageContent(differentObjectData)).toEqual(
      differentObjectData["Message"]["#text"]
    );
  });
});

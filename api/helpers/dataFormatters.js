// I'm not 100% sure that it is correct formatting and mapping of these specific data
// in real project I would communicate it with customer|PM|TeamLead

const formatMessagesData = data => {
  const { Message: messages } = data["FileDump"];
  return mapMessagesData(messages);
};

const mapMessagesData = messages =>
  messages.map(message => {
    return {
      username: message["From"],
      content: getMessageContent(message)
    };
  });

// one message object was different from rest and we should handle that case here
// note: used bracket notation here because name of properties are not eslint friendly style
const getMessageContent = message =>
  typeof message["Message"] === "string"
    ? message["Message"]
    : message["Message"]["#text"];

module.exports = {
  formatMessagesData: formatMessagesData,
  getMessageContent: getMessageContent,
  mapMessageData: mapMessagesData
};

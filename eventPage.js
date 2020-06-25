chrome.storage.local.get("Key", (data) => {
  console.log(data);
  if (data.Key === undefined) {
    chrome.storage.local.set({ Key: "Alt+z" });
    chrome.extension.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      if (request.data === "getKey") {
        sendResponse({ data: "Alt+z" });
      }
    });
  } else {
    chrome.extension.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      console.log(data);
      if (request.data === "getKey") {
        sendResponse({ data: data.Key });
      }
    });
  }
});

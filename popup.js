chrome.storage.local.get("Key", (data) => {
  if (data.Key === undefined) {
    chrome.storage.local.set({ Key: "Alt+z" });
    document.querySelector("h2").innerText = "Alt+z";
  } else {
    chrome.storage.local.get("Key", function (data) {
      document.querySelector("h2").innerText = data.Key;
    });
  }
});

chrome.storage.local.get("Key", function (Data) {
  if (Data.Key === undefined) {
    chrome.storage.local.set({ Key: "Alt+z" });
    chrome.storage.local.get("Key", function (data) {
      document.getElementById("Key").innerText = "Alt+z";
    });
  } else {
    chrome.storage.local.get("Key", function (data) {
      document.getElementById("Key").innerText = data.Key;
    });
  }
});

var key = [];

let onkeydown = (e) => {
  key.push(e.key);
  let output = "";
  key.map((k, i) => {
    if (i === 0) {
      output = k;
    } else {
      output = output + "+" + k;
    }
  });

  document.getElementById("Key").innerText = output;
  chrome.storage.local.set({ Key: output });
};

let onkeyup = (e) => {
  key = [];
  window.removeEventListener("keyup", onkeydown);
};

document.getElementById("changekey").addEventListener("click", () => {
  window.addEventListener("keydown", onkeydown);
  window.addEventListener("keyup", onkeyup);
});

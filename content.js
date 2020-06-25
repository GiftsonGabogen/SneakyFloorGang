chrome.storage.local.get("Key", function (data) {
  let Key = [];
  let keydown = (e) => {
    Key.push(e.key);
    let combination = "";
    Key.map((k, i) => {
      if (i === 0) {
        combination = k;
      } else {
        combination = combination + "+" + k;
      }
    });
    console.log(combination + " " + data.Key);
    if (combination === data.Key) {
      document.body.innerHTML = "<div class='TitleEx'>Loading.....</div>";
      document.querySelector(".TitleEx").style.color = "black";
      document.querySelector(".TitleEx").style.fontSize = "10rem";
      window.location.href = "https://youtube.com";
    }
  };
  let keyup = () => {
    Key = [];
    window.removeEventListener("keyup", keydown);
  };
  window.addEventListener("keydown", keydown);
  window.addEventListener("keyup", keyup);
});

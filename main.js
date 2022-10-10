document.getElementById("btn").addEventListener("click", async () => {
    chrome.tabs.query({'active': true}, function (tabs) {
        var url = tabs[0].url;
        //次はここから
    });
  });

  document.getElementById("clear").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: onRun,
    });
  });
  
  function onRun() {
    document.body.style.backgroundColor = "#fefeff";
  }
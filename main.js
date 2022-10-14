async function getTab() {
    let queryOptions = { active: true, currentWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);
    return tabs[0].url;
}
chrome.tabs.onUpdated.addListener(async function () {
    console.log("TAB UPDATED")
    const sendMessageId = document.getElementById("BTN-URL");
if (sendMessageId) {
    sendMessageId.onclick = async function() {
      let url = await getTab()
      var urlString = document.getElementById("urlString");
      urlString.innerHTML = url;
    }
}
})

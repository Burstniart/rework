function greenPage() {
    document.body.style.backgroundColor = "green";
}

chrome.action.onClicked.addListener((tab) => {
    var urlNow = tab.url;
    var checkUrl = urlNow.search('g');
    console.log(urlNow)
    if (checkUrl >= 0) {
        console.log('G in url'),
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: greenPage
        });
    };
});

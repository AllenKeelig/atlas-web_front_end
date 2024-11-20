function createElement(data) {
    const paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}
function queryWikipedia(callback) {
/*what the fuck is xmlhttp*/
/*(googling)...this is gonna take multiple pushes*/
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    xhr.onload = function() {
        const response = JSON.parse(xhr.responseText);
        const pages = response.query.pages;
        const pageId = Object.keys(pages)[0];
        const extract = pages[pageId].extract;
        callback(extract);
    }
    xhr.send();
}
/*wait there isn't a checker theres no reason to push while testing*/
queryWikipedia(createElement);

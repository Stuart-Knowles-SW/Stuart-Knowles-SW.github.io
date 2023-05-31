async function contentManager(contentId) {
    document.body.classList.remove(...document.body.classList)
    document.body.classList.add(contentId)
    const contentDiv = document.getElementById("mainContent")
    const newContentJson = await import(`../content/${contentId}.mjs`).then(module => module.default)
    const newHeader = document.createElement("h2")
    newHeader.appendChild(document.createTextNode(newContentJson.header))
    const newContent = []
    newContentJson.copy.forEach(
        str => {
            let newPara = document.createElement("p")
            newPara.appendChild(document.createTextNode(str))
            newContent.push(newPara)
        }
        )
    while(contentDiv.childNodes.length >= 1) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    contentDiv.append(newHeader, ...newContent)
}

contentManager("default")

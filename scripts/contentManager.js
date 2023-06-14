async function changeStyle(contentId) {
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

async function minmax(contentId) {
    const sunglasses = document.getElementById("sunglasses")
    if (contentId === "maximum") {
        const angle = Math.random() * 2 * Math.PI
        const radius = 400;
        const deltaX = `${radius * Math.cos(angle)}px`
        const deltaY = `${radius * Math.sin(angle)}px`
        document.documentElement.style.cursor = "url(\"../images/lightning-cursor2.png\") 10 10, auto"
        sunglasses.style.width = "130px"
        sunglasses.animate([
            {transform: `translateX(${deltaX}) translateY(${deltaY})`},
            {transform: "translateX(0) translateY(0)"}
        ],
            {duration: 1000, easing: "linear"})
    } else {
        document.documentElement.style.cursor = ""
        sunglasses.style.width = "0"
    }
}

async function contentManager(contentId) {
    await changeStyle(contentId)
    await minmax(contentId)
}

contentManager("default")

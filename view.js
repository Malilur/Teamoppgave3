
drawButton()
function drawButton(){
    app.innerHTML = /*html*/`
    <button onclick="startGame()">Drive!</button>
    `
}

function drawKulOMeter(){
    kulOMeter.innerHTML = kulness;
}
function drawView(){
    let htmlString = ``;
    
    layers.forEach(layer => { if (layer.visible) {
        htmlString += /*html*/`
        <img id="${layer.id}"
        src="${layer.src}"
        style="
        z-index:${layer.zIndex};
        display: grid;
        position: relative;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        ">`
    }
})
app.innerHTML = htmlString;
}

function runEvents(){
    let rand = randNumGen();

    prompt.targetLayer = rand;
    prompt.active = true;
    prompt.message = messages[rand];

    let htmlString = `
    <label style="font-size: 36px;">${prompt.message}</label>
    <button onclick="yesOption(${rand})">YES</button>
    `

    app2.innerHTML = htmlString;
}


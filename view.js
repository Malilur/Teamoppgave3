
drawButton()
function drawButton(){
    app.innerHTML = /*html*/`
    <button onclick="startGame()">Drive!</button>
    `
}

function drawKulOMeter(){
    kulOMeter.innerHTML = `Kul-o-Meter:
    <div style="background-color:blueviolet; width:${kulness}%;">${kulness}</div>
    `
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
    rev.play();
    if (kulness <= 0){
        let htmlString = `
        Grandma is cooler than you...
        `
        app.innerHTML = htmlString;
        app2.innerHTML ="";
    }
    else if (kulness >= 100){
        let htmlString = `
        You're just too cool!
        `
        app.innerHTML = htmlString;
        app2.innerHTML ="";
    }

    else if (rand == 1 || rand == 2 || rand == 3 || rand == 4){
    prompt.targetLayer = rand;
    prompt.active = true;
    prompt.message = messages[rand];

    let htmlString = `
    <label style="font-size: 36px;">${prompt.message}</label>
    <button onclick="yesOption(${rand})">YES</button>
    <button onclick="noOption(${rand})">NO</button>
    `

    app2.innerHTML = htmlString;

    }
// kompis elseif
    else if(rand == 5){
        prompt.targetLayer = rand;
        prompt.active = true;
        prompt.message = messages[rand];
        layers[rand].visible = true;
        drawView()

        let htmlString = /*html*/`
        <label style="font-size: 36px;">${prompt.message}</label>
        <button onclick="greetBuddy(1)">Wave</button>
        <button onclick="greetBuddy(2)">Flip Off</button>
        <button onclick="greetBuddy(3)">Bro Fist</button>
        `
        app2.innerHTML = htmlString;
    }
// bestemor elseif
    else if(rand == 6){
        prompt.targetLayer = rand;
        prompt.active = true;
        prompt.message = messages[rand];
        layers[rand].visible = true;
        drawView()

        let htmlString = `
        <label style="font-size: 36px;">${prompt.message}</label>
        <button onclick="grandma('stop')">YES</button>
        <button onclick="grandma('drive')">NO</button>

        `
        app2.innerHTML = htmlString;
    }
}

function grandma(stopOrDrive){
    if(stopOrDrive=='stop'){
        kulness = kulness-5;
        let htmlString = `
        <div style="font-size: 36px;">You spend a long time listening to grandma and loose kulness</div>
        `
        app2.innerHTML = htmlString;
        drawKulOMeter()
    }
    else if(stopOrDrive=='drive'){
        kulness = kulness-10;
        let htmlString = `
        <div style="font-size: 36px;">Grandma is mad you ignored her and smacks your car with her purse causing you to loose kulness</div>
        `
        app2.innerHTML = htmlString;
        drawKulOMeter()
    }

    layers[6].visible = false;
    drawView();
    setTimeout(runEvents, 4000)
}
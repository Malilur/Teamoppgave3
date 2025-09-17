function startGame(){
    drawKulOMeter()
    drawView()
    setTimeout(runEvents, 3000);
}

function randNumGen(){
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    return randomNumber;
}



function yesOption(rand){
    if (rand == 3){
        score = score + 10;
    }
    else if (rand == 3){
        score = score - 10;
    }
    layers[rand].visible = true;
    renderLayers();
    drawScore();
    setTimeout(startGame, 3000);
}

function noOption(rand){
    setTimeout(runEvents, 3000);
}
function startGame() {
    drawKulOMeter()
    drawView()
    setTimeout(runEvents, 3000);
}

function randNumGen() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}


function yesOption(rand) {
    app2.innerHTML="";
    if (rand == 1 || rand == 3) {
        kulness = kulness + 10;
    }
    else if (rand == 2 || rand == 4) {
        kulness = kulness - 10;
    }
    layers[rand].visible = true;
    drawView();
    drawKulOMeter();
    setTimeout(startGame, 3000);
}

function noOption(rand) {
    app2.innerHTML="";
    setTimeout(runEvents, 3000);
}

function greetBuddy(chosenGreeting) {
    app2.innerHTML="";
    let kompisNumber = Math.floor(Math.random() * 3) + 1;
    if (chosenGreeting === kompisNumber && kulness >= 50) {
        kulness = kulness + 10;
        
        let htmlString = `
        <div style="font-size: 36px;">Hehe, you're allright, bro...</div>
        `
        app2.innerHTML = htmlString;

        drawKulOMeter();
    }
    else if (chosenGreeting === kompisNumber && kulness < 50) {
        kulness = kulness - 5;
        
        let htmlString = `
        <div style="font-size: 36px;">You're not cool</div>
        `
        app2.innerHTML = htmlString;

        drawKulOMeter();
    }
    else{
        kulness = kulness - 10;
        
        let htmlString = `
        <div style="font-size: 36px;">Get outta here, douchebag!</div>
        `
        app2.innerHTML = htmlString;

        drawKulOMeter();
    }

    layers[5].visible = false;
    drawView();
    setTimeout(runEvents, 3000);

}
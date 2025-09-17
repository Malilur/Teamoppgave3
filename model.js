let kulness = 10;
let kompisNumber = Math.floor(Math.random()*3)+1;
const kulOMeter = document.getElementById('kulometerID');
const app = document.getElementById('appID');
const app2 = document.getElementById('app2ID');

let layers = [
    {id: "bg", src: "media/bg.png", zIndex: 0, visible: true},
    {id: "wunderbaum", src: "media/wunderbaum.png", zIndex: 1, visible: false},
    {id: "ekorn", src: "media/ekorn.png", zIndex: 2, visible: false},
    {id: "kompis", src: "media/kompis.png", zIndex: 3, visible: false},
    {id: "bestemor", src: "media/bestemor.png", zIndex: 4, visible: false}
]

let prompt = [
    {active: false, message: "", targetLayer: null}
]

let messages = {
    1: "Pick up wunderbaum?",
    2: "Pick up ekorn?",
    3: "How do you greet your buddy?",
    4: "Stop for grandma?"
}
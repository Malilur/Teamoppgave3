let kulness = 20;
const kulOMeter = document.getElementById('kulometerID');
const app = document.getElementById('appID');
const app2 = document.getElementById('app2ID');
const rev = document.getElementById('revID');

let layers = [
    {id: "bg", src: "media/bg.png", zIndex: 0, visible: true},
    {id: "wunderbaum", src: "media/wunderbaum.png", zIndex: 2, visible: false},
    {id: "ekorn", src: "media/ekorn.png", zIndex: 3, visible: false},
    {id: "paint", src: "media/paint.png", zIndex: 1, visible: false},
    {id: "ratt", src: "media/ratt.png", zIndex: 4, visible: false},
    {id: "kompis", src: "media/kompis.png", zIndex: 5, visible: false},
    {id: "bestemor", src: "media/bestemor.png", zIndex: 6, visible: false}
]

let prompt = [
    {active: false, message: "", targetLayer: null}
]

let messages = {
    1: "You drive past a wunderbaum, put it in your car?",
    2: "You spot a squirrel, put it in your car?",
    3: "You spot some paint on the side of the road, paint car?",
    4: "You drive past some pink fur, add it to your car?",
    5: "Your buddy stops you on your drive, what do you respond?",
    6: "Grandma is waiting up ahead, stop to see what she wants?"
}
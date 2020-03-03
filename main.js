// const Goldrush = require('./goldrush')


const render = new Renderer()
let board = new GoldRush()

Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

board.loadBoard(10, 10)
render.renderBoard(board.getMatrix(), board.getPoints())
$("body").keypress(function (e) {
    var key = e.keyCode;
    if (key == 119) {
        board.movePlayer(1, "up")
    }
    else if (key == 97) {
        board.movePlayer(1, "left")
    }
    else if (key == 100) {
        board.movePlayer(1, "right")
    }
    else if (key == 115) {
        board.movePlayer(1, "down")
    }
    render.renderBoard(board.getMatrix(), board.getPoints())

});
$("body").keydown(function (e) {
    if (e.keyCode == '38') {
        board.movePlayer(2, "up")
    }
    else if (e.keyCode == '40') {
        board.movePlayer(2, "down")
    }
    else if (e.keyCode == '37') {
        board.movePlayer(2, "left")
    }
    else if (e.keyCode == '39') {
        board.movePlayer(2, "right")
    }
    render.renderBoard(board.getMatrix(), board.getPoints())
})

$(".reset").on("click", function () {
    board.loadBoard(4, 3)
    render.renderBoard(board.getMatrix())
})
$(".start").on("click", function () {
    let rawSize = $(".rawInput").val()
    let columSize = $(".columnInput").val()
    board.loadBoard(rawSize, columSize)
    render.renderBoard(board.getMatrix(), board.getPoints())

    let time = 0
    const timer = function(){
    
    
        setTimeout(() => {
            let timerDiv = document.getElementById("timer");
            time++;
            timerDiv.innerHTML = time;
            timer();
        }, 1000);
    }


})

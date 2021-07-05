class Renderer {
    _render(matrix) {
        let source = $('#board-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ matrix })
        $('#game-container').empty().append(newHTML)
        $("body").find("#game-container").find(".row").css("grid-template-columns", `repeat(${matrix.length},1fr)`);
    }
    renderBoard(matrix, scoreObj) {
        this._render(matrix)
        this.renderScore(scoreObj)
    }
    renderScore(scoreObj) {
        $(".score").empty().append(`<div> Player 1 Score: ${scoreObj[1]}</div>`)
        $(".score").append(`<div> Player 2 Score: ${scoreObj[2]}</div>`)
    }
}
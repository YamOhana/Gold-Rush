

class GoldRush extends Matrix {
    constructor() {
        super()
        this.playerPoints = {}
    }
    loadBoard(rowNum, columsNum) {

        //started with hardcoding

        this.playerPoints = {}
        this.matrix = this.generateMatrix(rowNum, columsNum)
        for (let i = 0; i < rowNum; i++) {
            for (let j = 0; j < columsNum; j++) {
                this.matrix[i][j] = "."
            }
            let pointrand = Math.floor(Math.random() * Math.floor(columsNum))
            let pointrand2 = Math.floor(Math.random() * Math.floor(columsNum))
            let blockrand = Math.floor(Math.random() * Math.floor(columsNum))
            let blockrand2 = Math.floor(Math.random() * Math.floor(columsNum))
            this.matrix[i][pointrand2] = "C"
            this.matrix[i][blockrand2] = "X"
            this.matrix[i][pointrand] = "C"
            this.matrix[i][blockrand] = "X"
        }
        this.matrix[0][0] = 1
        this.matrix[this.matrix.length - 1][this.matrix[this.matrix.length - 1].length - 1] = 2
    }
    movePlayer(player, direction) {
        let coordinate = this.findCoordinate(player)
        direction == "down" ? this.moveDown(player, coordinate) :
            direction == "up" ? this.moveUp(player, coordinate) :
                direction == "right" ? this.moveRight(player, coordinate) :
                    direction == "left" ? this.moveLeft(player, coordinate) : false

    }
    moveUp(player, coordinate) {
        if (this.CheckPlaceAndAddPoints(player, coordinate.y - 1, coordinate.x)) {
            this.alter(coordinate.y - 1, coordinate.x, player)
            this.alter(coordinate.y, coordinate.x, ".")
        }
    }
    moveDown(player, coordinate) {
        if (this.CheckPlaceAndAddPoints(player, coordinate.y + 1, coordinate.x)) {
            this.alter(coordinate.y + 1, coordinate.x, player)
            this.alter(coordinate.y, coordinate.x, ".")
        }
    }
    moveRight(player, coordinate) {
        if (this.CheckPlaceAndAddPoints(player, coordinate.y, coordinate.x + 1)) {
            this.alter(coordinate.y, coordinate.x + 1, player)
            this.alter(coordinate.y, coordinate.x, ".")
        }
    }
    moveLeft(player, coordinate) {
        if (this.CheckPlaceAndAddPoints(player, coordinate.y, coordinate.x - 1)) {
            this.alter(coordinate.y, coordinate.x - 1, player)
            this.alter(coordinate.y, coordinate.x, ".")
        }
    }
    CheckPlaceAndAddPoints(player, rowNum, columsNum) {
        if (this.get(rowNum, columsNum) == "C") {
            if (!this.playerPoints[player])
                this.playerPoints[player] = 10
            else {
                this.playerPoints[player] += 10
            }
            return true
        }
        else if (this.get(rowNum, columsNum) == ".")
            return true
        else if (this.get(rowNum, columsNum) == undefined)
            return false
        else
            return false
        
        
    }
    getPlayerPoints(player) {
        return this.playerPoints[player] ? this.playerPoints[player] : 0
    }
    getPoints() {

        return { 1: this.getPlayerPoints(1), 2: this.getPlayerPoints(2) }
    }
    getMatrix() {
        return this.matrix
    }


    

}



class Matrix {
    constructor(rowNum, columsNum) {
        this.matrix = this.generateMatrix(rowNum, columsNum)
    }

    generateMatrix(rowNum, columsNum) {
        let matrix = []
        let num = 1
        for (let i = 0; i < rowNum; i++) {
            let row = []
            for (let j = 0; j < columsNum; j++)
                row.push(num++)
            matrix.push(row)
        }
        return matrix
    }
    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }
    printColumn(columsNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][columsNum])
        }
    }
    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
    alter(rowNum, columsNum, updateNum) {
        if (this.matrix[rowNum][columsNum] == undefined || null)
            return
        this.matrix[rowNum][columsNum] = updateNum
    }
    get(rowNum, columsNum) {
        try {
            return this.matrix[rowNum][columsNum]
        }
        catch (err) {
            return undefined
        }
    }
    findCoordinate(value) {
        for (let i = 0; i < this.matrix.length; i++)
            for (let j = 0; j < this.matrix[i].length; j++)//?
            {
                if (this.matrix[i][j] === value) {
                    let obj = { x: j, y: i }
                    return obj;
                }
            }
        console.log('dfsfd')
    }
}


export const setSquareColor = (newBoard, columnIndex, color) => {
    for (let col = 5; col >= 0; col--) {
        const newColumn = [...newBoard[col]]
        if (newColumn[columnIndex] === null) {
            newColumn[columnIndex] = color
            newBoard[col] = newColumn
            break
        }
    }
}

export const checkLine = (a, b, c, d) => {
    // Check first cell non-zero and all cells match
    return a != null && a == b && a == c && a == d
}

export const checkWinner = (newBoard) => {
    // Check down
    for (let r = 0; r < 3; r++)
        for (let c = 0; c < 7; c++)
            if (
                checkLine(
                    newBoard[r][c],
                    newBoard[r + 1][c],
                    newBoard[r + 2][c],
                    newBoard[r + 3][c]
                )
            )
                return newBoard[r][c]

    // Check right
    for (let r = 0; r < 6; r++)
        for (let c = 0; c < 4; c++)
            if (
                checkLine(
                    newBoard[r][c],
                    newBoard[r][c + 1],
                    newBoard[r][c + 2],
                    newBoard[r][c + 3]
                )
            )
                return newBoard[r][c]

    // Check down-right
    for (let r = 0; r < 3; r++)
        for (let c = 0; c < 4; c++)
            if (
                checkLine(
                    newBoard[r][c],
                    newBoard[r + 1][c + 1],
                    newBoard[r + 2][c + 2],
                    newBoard[r + 3][c + 3]
                )
            )
                return newBoard[r][c]

    // Check down-left
    for (let r = 3; r < 6; r++)
        for (let c = 0; c < 4; c++)
            if (
                checkLine(
                    newBoard[r][c],
                    newBoard[r - 1][c + 1],
                    newBoard[r - 2][c + 2],
                    newBoard[r - 3][c + 3]
                )
            )
                return newBoard[r][c]

    return null
}
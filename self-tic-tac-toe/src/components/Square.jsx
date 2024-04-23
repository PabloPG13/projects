export function Square({index, children, updateBoard, isSelected}){

    const handleClick = () => {
      updateBoard(index)
    }
  
    const className = isSelected && 'is-selected'
  
    return(
      <div className={`square ${className}`} onClick={handleClick}>
        {children}
      </div>
    )
}
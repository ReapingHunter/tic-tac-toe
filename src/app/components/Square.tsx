
const Square = ({value, onSquareClick}) => {
  return(
    <button className="bg-transparent border-2" onClick={onSquareClick}>
      {value}
    </button>
  )
}
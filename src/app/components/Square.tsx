
export const Square = ({value, onSquareClick}) => {
  return(
    <button className="bg-transparent border-2 py-2 px-4 font-bold" onClick={onSquareClick}>
      {value}
    </button>
  )
}
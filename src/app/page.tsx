'use client'
import { Square } from "./components/Square";
import { useState } from "react";


export default function Board() {
  const [xTurn, setXTurn] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (x) => {
    if(squares[x] || calculateWinner(squares))
      return

    const nextSquares = squares.slice()
    nextSquares[x] = xTurn ? 'X' : 'O'
    setSquares(nextSquares)
    setXTurn(!xTurn)
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    
    for(let x = 0; x < lines.length; x++){
      const [a, b, c] = lines[x]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a]
    }
    return null
  }

  const winner = calculateWinner(squares)
  let status = ""
  if(winner){
    status = "Winner: " + winner
  } else{
    status = "Next move: " + (xTurn ? 'X' : 'O')
  }
  
  return (
    <div className="items-center justify-items-center">
      <div>{status}</div>
      <div>
        <Square value={squares[0]} onSquareClick={()=>{handleClick(0)}}></Square>
        <Square value={squares[1]} onSquareClick={()=>{handleClick(1)}}></Square>
        <Square value={squares[2]} onSquareClick={()=>{handleClick(2)}}></Square>
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={()=>{handleClick(3)}}></Square>
        <Square value={squares[4]} onSquareClick={()=>{handleClick(4)}}></Square>
        <Square value={squares[5]} onSquareClick={()=>{handleClick(5)}}></Square>
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={()=>{handleClick(6)}}></Square>
        <Square value={squares[7]} onSquareClick={()=>{handleClick(7)}}></Square>
        <Square value={squares[8]} onSquareClick={()=>{handleClick(8)}}></Square>
      </div>
    </div>
  );
}


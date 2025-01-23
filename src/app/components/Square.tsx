import { useState } from "react";
export const Square = ({value, onSquareClick}) => {
  return(
    <button className="bg-transparent border p-0 font-bold w-[34px] h-[34px] float-left" onClick={onSquareClick}>
      {value}
    </button>
  )
}
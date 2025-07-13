import type { ButtonProps } from "../types/types"

export default function Button({type, text, onClick} : ButtonProps) {
  return (
    <button onClick={onClick} type={type} className="bg-green-600 p-1 cursor-pointer hover:bg-green-400 duration-200 text-white font-black rounded-xl" >
      {text}
    </button>
  )
}

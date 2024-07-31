import { useState } from "react"

const BG = () => {

  const [bgColor, setBgColor] = useState("white");

  return (
    <div className='w-full h-screen flex justify-center' style={{backgroundColor:bgColor}}>
      <div className="h-12 w-9/12 bg-transparent flex justify-center align-middle gap-5 rounded-full">
         <button className=" w-20 px-3 py-1 rounded-full bg-black text-white outline-none ring-1 ring-red-600" onClick={()=>setBgColor("black")}>black</button>
         <button className=" w-20 px-3 py-1 rounded-full bg-white text-black outline-none ring-1 ring-red-600" onClick={()=>setBgColor("white")}>white</button>
         <button className=" w-20 px-3 py-1 rounded-full bg-pink-500 text-black outline-none ring-1 ring-red-600" onClick={()=>setBgColor("pink")}>pink</button>
         <button className=" w-20 px-3 py-1 rounded-full bg-green-600 text-black outline-none ring-1 ring-red-600" onClick={()=>setBgColor("green")}>green</button>
         <button className=" w-20 px-3 py-1 rounded-full bg-orange-500 text-white outline-none ring-1 ring-red-600" onClick={()=>setBgColor("orange")}>orange</button>
      </div>
    </div>
  )
}

export default BG

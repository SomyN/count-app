 import { useState } from "react"
 import Button from "./Button"

 const Card = () => {  

    const [number, setNumber] = useState(0)


    const countDown = () => {
        setNumber(number-1)
    }

    const countUp = () => {
        setNumber(number+1)
    }
   return (
     <div className="bg-white w-60 h-auto rounded-xl shadow-xl">
        <div className="bg-blue-100 flex justify-center rounded-t-xl py-2">
            <h1 className="text-2xl font-bold text-black">Counter App</h1>
        </div>
        <div className="py-10 flex justify-center">
            <h2 className="text-9xl">{number}</h2>
        </div>
        <div className="bg-blue-200 rounded-b-xl py-4 flex justify-evenly">
            <Button text="-1" onClick={countDown} />
            <Button text="+1" onClick={countUp} />
        </div>
     </div>
   )
 }
 
 export default Card
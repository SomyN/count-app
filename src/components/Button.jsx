 const Button = ({
    text="Increase",
    onClick
 }) => {
   return (
     <button className="bg-white hover:bg-gray-50 text-black font-bold py-2 px-4 rounded"
     onClick={onClick}
     >
        {text}
     </button>
   )
 }
 
 export default Button


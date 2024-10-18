import { useState } from "react"

export default function Counters (){
                const [count ,setCount] = useState(0);
                const handleAdd = () =>{
                                const newCount = count +1;
                                setCount(newCount)
                }
                
                const handleReduce = () =>{
                                const newCount = count -1;
                                setCount(newCount)
                }
         
                return(
              
                 <div style={{border:'5px solid yellow'}}>
                                <h3>Counters:{count}</h3>
                 
                                <button onClick={handleAdd}>Add</button>
               <button onClick={handleReduce}>Reduce</button>
                </div>

                )
}
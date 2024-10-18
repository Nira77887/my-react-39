import { useState } from "react"

export default function Teacher (){
                const [teacher,setTeacher] = useState (11);
                const handleAdds=() =>{
                   const newTeacher = teacher+1;  
                   setTeacher(newTeacher)         ;  
                }
   
                
                const handleReduces = () =>{
                                const newTeacher = teacher -1;
                                setTeacher(newTeacher);
                }
         
       
                return(
    
                 <div style={{border:'5px solid black'}}>

                            
<h3>students: {teacher}</h3>
<button onClick={handleAdds}>Add</button>
<button onClick={handleReduces}>Remove</button>
</div>
                )
}
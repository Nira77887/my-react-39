// export default function Friend(){
//            return(
// <div>
// <h4>Name:</h4>
// <p>Email:</p>
// </div>
//            )     
// }
import { useEffect, useState } from "react"
import Friend from "./friend";

export default function Friend(){
const [friends,setFriends] =useState([]);
useEffect(()=>{
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(res =>res.json() )
                .then(data=> setFriends(data))
},[])
                return(
                <div className="box">
  <h3>Friends:{friends.length}</h3>
  {
    friends.map(friend => <Friend></Friend>)
  }
                </div>
                )
}
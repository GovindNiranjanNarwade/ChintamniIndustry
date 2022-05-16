import axios from 'axios'
import React,{useEffect,useState} from 'react'
import NavBar from '../Component/NavBar'
import './viewInventory.css'
export default function ViewInventory() {
  const [state, setState] = useState([])
  useEffect(async() => {
const {data}=await axios.get("http://192.168.43.220:5000/api/v1/getInventory")
    console.log(data.data);
    setState(data.data)
    console.log(...state);
    },[])
    // "
  return (
    <div>
      <NavBar/>
   <div className="container mt-5 ">
      <div className='d-flex flex-row justify-content-around mt-5'><h2 style={{
          fontFamily: 'Merriweather',
      }}>ViewInventory </h2>
       </div>
   <table className="table table-bordered  mt-5 ">
     <thead>
       <tr className='bg bg-primary' style={{
           fontFamily: 'Merriweather',
       }}>
         <th >Sr.No</th>
         <th >Date</th>
         <th >Product Name</th>
         <th >Quantity</th>
         <th >Unit</th>
       </tr>
     </thead>
     <tbody>

{
 state.map((item,index)=>{
  return <tr key={item._id}>
    <td >{index+1}</td>
    <td>{item.Date}</td>
    <td>{item.NameOfProduct}</td>
    <td>{item.Quantity}</td>
    <td>{item.Unit}</td>
  </tr>

  })  
}    
 </tbody>
   </table>
   </div>
    </div>
  )
}

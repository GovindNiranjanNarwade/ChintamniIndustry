import React,{useState,useEffect} from 'react'
import axios from 'axios'
import NavBar from '../Component/NavBar';
export default function ViewStock() {
  const [stock, setStock] = useState([])
  const getStock = async()=>{
  try {
      const {data} =await axios.get("http://192.168.43.220:5000/api/v1/getStock")
      console.log(data.data);
      setStock(data.data)
  }
   catch (error) {
    console.log("Something Went worng");
  }
};
  useEffect(async() => {

     
  getStock()
}, [])

  return (
    <div>
      <NavBar/>
      <div className="container mt-5">
        <h2 className='text-center' style={{
  fontFamily: 'Merriweather',

        }}> View Stock</h2>
   <table className="table ">
     <thead className='table-bordered '>
       <tr className='bg bg-primary'>
         <th scope="col">Sr.No</th>
         <th scope="col">Date</th>
         <th scope="col">Product</th>
         <th scope="col">Quantity</th>
         <th scope="col">Rate</th>
         <th scope="col">Total</th>
         
       </tr>
     </thead>
     <tbody>

  {
  stock.map((item,index)=>{
    return <tr key={item._id}>
    <th scope="row">{index+1}</th>
    <td>{item.Date}</td>
    <td>{item.Product}</td>
    <td>{item.Quantity}</td>
    <td>{item.Rate}(INR)</td>
    <td>{item.Total} {item.Quantity*item.Rate}</td> 

  </tr>

  })  
}    
 </tbody>
   </table>
   </div>
      </div>
  )
}

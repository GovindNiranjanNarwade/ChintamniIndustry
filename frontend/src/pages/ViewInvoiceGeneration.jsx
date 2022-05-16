import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../Component/NavBar'
import jsPDF from 'jspdf'
import GeneratePDF from './GeneratePDF'

export default function ViewInvoiceGeneration( ) {
    const [state, setState] = useState([])
 

    useEffect(async() => {
  
       const getInvoce = async()=>{
        const {data} =await axios.get("http://192.168.43.220:5000/api/v1/getInvoiceGenetion")
        console.log(data.data);
        setState(data.data)
    }
    getInvoce()
}, [])

  return (
    <div>
   <NavBar/>
      
        <div className='d-flex flex-row justify-content-around mt-5' >
      
          <h1 style={{
              fontFamily: 'Merriweather',
          }}> View InvoiceGeneration</h1>
        
        </div>
        <div className="container mt-5">  
   <table className="table  mt-5 ">
     <thead className='bg bg-primary table-bordered'>
         <th>Sr.No</th>
         <th>Date</th>
         <th>ItemName</th>
         <th>Unit</th>
         <th>Quantity</th>
         <th>GstAmount</th>
         <th>Price</th>
         <th>Amount</th>
         <th>Download Pdf</th>
     </thead>
     <tbody>

{
  state.map((item,index)=>{
  return  <tr key={item._id}>
    <th scope="row">{index+1}</th>
    <td>{item.Date}</td>
    <td>{item.ItemName}</td>
    <td>{item.Unit}</td>
    <td>{item.Quantity}</td>
    <td>{item.Price % 2.8}</td>
    <td>{item.Price}</td>
    <td> {item.Quantity*item.Price +item.Price % 2.8}</td>
  <td><Link to={`/generatePDF/${item._id}`} className='btn btn-primary'>Download</Link></td>
  </tr>
  })  
}    
 </tbody>
   </table>
   </div>
         
    </div>
  )
}

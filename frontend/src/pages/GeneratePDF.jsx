import axios from 'axios'
import React,{useEffect,useState} from 'react'
 import { Link } from 'react-router-dom';
import ViewInvoiceGeneration from './ViewInvoiceGeneration'
import { useParams } from "react-router-dom";

import './pdf.css'
export default function GeneratePDF() {
  const [state, setstate] = useState([])
  const {id} = useParams();

   useEffect(async() => {
    
     const{data}= await axios.get(`http://192.168.43.220:5000/api/v1/getInvoiceGenetion/${id}`)
     console.log(data.data);
 setstate(data.data)
console.log(state);
   }, [id])
  const HandlePrint =()=>{
    window.print()
  }
  
  return (
    <>
  <h1 className='text-center'>ShriChintamani</h1>
   <div className='d-flex flex-row justify-content-between'> 
<Link to="/dashboard"><button className='btn btn-dark'>Back</button></Link>
    <button className='btn btn-primary mt-5 ' onClick={HandlePrint}>Print</button>
</div>
    <div className='d-flex flex-row justify-content-around'>
      
    <div className='content mt-5'>
<h2>Abhijeet Thakur</h2>
<span>Plot No. 34/A Lane 2 
 <br /> New MIDC Sawardi Nagpur Road Nadhgao Peth</span> <br />
<span>Amravati</span> <br />
<span>Phone no. : 8605956751 </span> <br />
<span>Email : abhijeett620@gmail.com </span> <br />
<span>GSTIN : 27BOIPT5414C1ZY</span>  <br />
<span>State : 27-Maharashtra</span>
     </div>
     <div className='img' ></div>
    </div>
    <h2 className='text-center'>Tax Invoice</h2>
    <div className='mt-5'>
    <table className='table table-borderd  table-eponsive center'>
<thead>
 <th>#</th>
  <th>Item</th>
  <th> HSN/SAC</th>
  <th> Quantity</th>
  <th> Price/Unit</th>
  <th> GST</th>
  <th> Amount</th>
</thead>
<tbody>

   
      <tr > <td>{1}</td>
        <td>{state.ItemName}</td>
        <td></td>
        <td> {state.Quantity}</td>
        <td> {state.Unit}</td>
        <td> {state.Price % 2.8}</td>
        <td> {state.Quantity*state.Price +state.Price % 2.8}</td>
        </tr>
   
  
  <tr><td colSpan="6">Total </td>
  <td>{state.Quantity*state.Price +state.Price % 2.8}</td>
  </tr>
</tbody>
    </table>
    <div className='footer'>
     <div className='frist'>
   <span>TERMS AND CONDITIONS</span>
      <span>Thank you for doing business with us</span>
      <li></li>
     </div>
     <div className='last'>
       <span>SubTotal:{state.Quantity*state.Price}</span>
       <span>IGST@18%:</span>
       <span className='tt'>Total:{state.Quantity*state.Price +state.Price % 2.8} </span>
       <span>Receview:</span>
       <span>Balance:</span>
       <hr />
       <span>for,Abhijit Thakur</span>
       <span>Authorized Signatory
</span>
     </div>
    </div>
    </div>
    </>
  )
}





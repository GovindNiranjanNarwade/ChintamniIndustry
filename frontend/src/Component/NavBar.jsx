import React from 'react'
import { Link } from 'react-router-dom'
import "../pages/dashboard.css"
export default function NavBar() {

  return (
    <div>
        <div className="sidebar">
          <div className="sidebar-brand">
          <div className="img"></div>
             <span style={{
  fontFamily: 'Merriweather',
  fontSize:"20px"

             }}> Shree Chintamani</span>
          </div>
          <div className="sidebar-menu">
          <ul>
            <li><Link to='/dashboard' className="nav-link active" aria-current="page" href="#"> <i class="bi bi-house-door"></i>  <span style={{
  fontFamily: 'Merriweather',

            }}>Dashboard</span></Link></li>   
             
<div data-bs-toggle="collapse" data-bs-target="#inventory"><h3 style={
  {color:"white",
  fontFamily: 'Merriweather',
  fontSize:"25px"
  }
}><i class="bi bi-boxes"></i> Inventory</h3></div>
<div id='inventory'><div>
   <li><Link to='/Addinventory' className="dropdown-item" >
     <i class="bi bi-bag-plus"></i>  <span style={{
  fontFamily: 'Merriweather',
 

     }}>Add Inventory</span>
     </Link></li>
   <li><Link to='/ViewInventory' className="dropdown-item" >
     <i class="bi bi-hdd-stack"></i>  <span style={{
  fontFamily: 'Merriweather',

     }}>View Inventory</span>
     </Link></li></div></div>
<div data-bs-toggle="collapse" data-bs-target="#stock"><h3 style={
  {color:"white",
  fontFamily: 'Merriweather',
  fontSize:"25px"

}
}> <i class="bi bi-pie-chart"></i>  Stock</h3></div>
<div ><div id='stock' > 
 <li>
   <Link to='/AddStock' className="dropdown-item" href="#">
     <i class="bi bi-people"></i>  <span style={{
  fontFamily: 'Merriweather',

     }}>Add Stock</span>
     </Link></li>
 <li><Link to='/ViewStock' className="dropdown-item" href="#">
  <i class="bi bi-broadcast"></i>  <span style={{
  fontFamily: 'Merriweather',

  }}>View Stock</span></Link></li></div></div>
<div data-bs-toggle="collapse" data-bs-target="#invoice"><h3  style={
  {color:"white",
  fontFamily: 'Merriweather',
  fontSize:"25px"

}
} > <i class="bi bi-receipt-cutoff"></i>    Invoice</h3></div>
<div><div id='invoice'>
<li><Link to='/AddInvoiceGenerataion' className="dropdown-item" href="#"><i class="bi bi-bullseye"></i>  <span style={{
  fontFamily: 'Merriweather',

}}>Add Invoice Generation</span></Link></li>
           <li><Link to='/ViewInvoiceGenerataion' className="dropdown-item" href="#"><i class="bi bi-brush"></i>  <span style={{
  fontFamily: 'Merriweather',

           }}>View Invoice Generation</span></Link></li>
  </div></div>

            </ul> 
          </div>
        
        </div>

    </div>

  )
}

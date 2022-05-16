import React,{useEffect,useState} from 'react'
import NavBar from './NavBar'
import '../pages/dashboard.css'
import axios from 'axios'
export default function Dashbord() {
  const [invoice, setinvoice] = useState([])
  const [stock, setstock] = useState([])
  const [inventory, setinventory] = useState([])
  useEffect(async() => {
    const{data} = await axios.get("http://192.168.43.220:5000/api/v1/getInvoiceGenetion")
    
    console.log(data);
    setinvoice(data.count)
    console.log(invoice);
  }, [])
  useEffect(async() => {
    const{data} = await axios.get("http://192.168.43.220:5000/api/v1/getInventory")
    
    console.log(data);
    setinventory(data.count)
    console.log(inventory);
  }, [])
  useEffect(async() => {
    const{data} = await axios.get("http://192.168.43.220:5000/api/v1/getStock")
    
    console.log(data);
    setstock(data.count)
    console.log(stock);
  }, [])
  
  return (
    <div>
      <NavBar/>

        

        <div className="main-content">
          <header>
<h3 style={{
  fontFamily: 'Merriweather',

}}>

overview
</h3>
<div className="search-wrapper">
  <span><i class="bi bi-search"></i></span>
  <input type="search" placeholder='Search Here' style={{
  fontFamily: 'Merriweather',
    fontSize:"20px"
  }} />
</div>
<div className="user-wrapper">
<div className="img"></div>
  <h4 style={{
  fontFamily: 'Merriweather',

  }}>  Admin</h4>

</div>
          </header>
          <main>
            <div className="cards">
<div className="single-card bg bg-danger" >
  <div>
    <h4 style={{
  fontFamily: 'Merriweather',

    }}>No of Invoice generated</h4>
  </div>
  <div>
  <span>{invoice}</span>
  </div>
</div>
<div className="single-card bg bg-warning">
  <div>
    <h4 style={{
  fontFamily: 'Merriweather',

    }}>No of Product added</h4>
   
  </div>
  <div>
    <span>{inventory}</span>
  </div>
</div>
<div className="single-card bg bg-success">
  <div>
    <h4 style={{
  fontFamily: 'Merriweather',

    }}>No of stock added</h4>
   
  </div>
  <div>
  <span>{stock}</span>
  </div>
</div>
<div className="single-card bg bg-primary">
  <div>
    <h4 style={{
  fontFamily: 'Merriweather',

    }}>Reports</h4>
    
  </div>
  <div>
    <span>0</span>
  </div>
</div>
            </div>
          </main>
        </div>
     
      </div>
  )
}

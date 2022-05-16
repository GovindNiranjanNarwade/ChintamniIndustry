import React,{useState} from 'react'
import NavBar from '../Component/NavBar'
import axios from 'axios'
export default function AddInvoiceGenetaion() {
  const [Date, setDate] = useState()
  const [ItemName,setItemName] = useState()
  const [Quantity, setQuantity] = useState()
  const [Price, setPrice] = useState()
const [Unit, setUnit] = useState()
  const submit = async (e)=>{
      e.preventDefault()
      const {data} = await axios.post("http://192.168.43.220:5000/api/v1/createInvoiceGeneration",{Date,ItemName,Quantity,Price,Unit})
console.log(data);
    setDate(()=>data)
    setItemName(()=>data)
    setQuantity(()=>data)
    setUnit(()=>data)
    setPrice(()=>data)
    
    
  }
  return (
    <div>
        <NavBar/>
      <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8 offset-sm-3">
      <h1  style={{
          fontFamily: 'Merriweather'
      }}>Add Invoice Generation</h1>
                    
                        <div className="card mt-5">
      


                            <div className="card-body">
                              
                              
                                <form onSubmit={submit}>
                                <div className='mt-4'>
                                    <label htmlFor="udate">Select Date</label>
                                    <input type="date" id='udate' className='form-control' placeholder='Select the Date' onChange={(e)=>{
                                        setDate(()=>e.target.value)
                                    }} />
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="product"> Item </label>
                                    <select type="text" id='product' className='form-control' placeholder='select Product' onChange={(e)=>{
                                        setItemName(()=>e.target.value)
                                    }} >
                                                                               <option value="material">Select Item</option>
                                       <option value="Cement">Cement</option>
                                       <option value="Sand">Sand</option>
                                       <option value="Aggregates (6 mm)">Aggregates (6 mm)</option>
                                       <option value="Aggregates (10 mm)">Aggregates (10 mm)</option>
                                       <option value="Fly As">	Fly As</option>
                                       <option value="Hardner">	Hardner</option>
                                       <option value="Colour (Red)">	Colour (Red)</option>
                                       <option value="Colour (Black)">	Colour (Black)</option>
                                       <option value="Colour (Yellow)">	Colour (Yellow)</option>
                                       <option value="Fly Ash Brick(4”)">	Fly Ash Brick(4”)</option>
                                       <option value="	Fly Ash Brick(6”)">	Fly Ash Brick(6”)</option>
                                       <option value="Chequer Titles (Flower)">Chequer Titles (Flower)</option>
                                       <option value="Chequer Titles (Check Box)">	Chequer Titles (Check Box)</option>
                                       <option value="Chequer Titles (Diamond)">Chequer Titles (Diamond)</option>
                                       <option value="Chequer Titles (Button)">Chequer Titles (Button)</option>
                                    </select>
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="unit">Select Unit</label>
                                    <select type="number" id='unit' className='form-control' placeholder='select Unit' onChange={(e)=>{
                                        setUnit(()=>e.target.value)
                                    }} >
                                         <option value="UNIT">Select Unit</option>
                                        <option value="BAG">Bag</option>
                                        <option value="LITRE">litre</option>
                                        <option value="Cubic FEET">cubic Feet</option>
                                        <option value="TONNE">tonne</option>
                                   
                                    </select>
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="quantity">Enter Quantity</label>
                                    <input type="number" id='quantity' className='form-control' placeholder='Enter Quantity' onChange={(e)=>{
                                        setQuantity(()=>e.target.value)
                                    }} />
                                </div>
                               
                                
                                <div className='mt-4'>
                                    <label htmlFor="item">Enter Price</label>
                                    <input type="number" id='item' className='form-control' placeholder='Enter Price of Item' onChange={(e)=>{
                                        setPrice(()=>e.target.value)
                                    }} />
                                </div>
                                
                             
                                <br /><br />

<button   className='btn w-100 btn-lg btn-dark' >Submit</button> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
</div>
    </div>
  )
}

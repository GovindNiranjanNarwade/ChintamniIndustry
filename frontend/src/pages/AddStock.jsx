import React,{useState} from 'react'
import axios from "axios"
import NavBar  from '../Component/NavBar'
import { Link } from 'react-router-dom'
export default function AddStock() {
    
    const [Date, setDate] = useState()
    const [Product, setProduct] = useState()
    const [Quantity,setQuantity] = useState()
    const [Rate, setRate] = useState()
    
    const submit = async (e)=>{
        e.preventDefault()
        const {data} = await axios.post("http://192.168.43.220:5000/api/v1/createStock",{Date,Product,Quantity,Rate,})
console.log(data.data);
      setDate(()=>data)
      setProduct(()=>data)
      setQuantity(()=>data)
      setRate(()=>data)
    // const result =axios.post("",)
    // console.log(result.data);
    }

return (
        <div>
            <NavBar/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                    <h1 style={{
                         fontFamily: 'Merriweather'
                    }}>Add Stock</h1>
                        <div className="card">

                            <div className="card-body">
                              
                              
                                <form onSubmit={submit}>
                                <div className='mt-4'>
                                    <label htmlFor="date">Select Date</label>
                                    <input type="date" id='date' className='form-control' placeholder='Select the Date' onChange={(e)=>{
                                        setDate(e.target.value)
                                    }} />
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="iproduct">Select Product </label>
                                    <select type="text" id='iproduct' className='form-control' placeholder='Enter the Name of Product' onChange={(e)=>{
                                        setProduct(e.target.value)
                                    }} >
                                                                               <option value="material">Select Material</option>
                                       <option value="Cement">Cement</option>
                                       <option value="Sand">Sand </option>
                                       <option value="Aggregates (6 mm)">Aggregates (6 mm)</option>
                                       <option value="Aggregates(10 mm)">Aggregates (10 mm)</option>
                                       <option value="Fly Ash">	Fly Ash</option>
                                       <option value="Hardner">	Hardner</option>
                                       <option value="Colour(Red)">	Colour (Red)</option>
                                       <option value=" Colour(Black)">	Colour (Black)</option>
                                       <option value="	Colour (Yellow ) ">	Colour (Yellow ) </option>
                                       <option value="Fly Ash Brick(4”">	Fly Ash Brick(4”)</option>
                                       <option value="Fly Ash Brick(6”">	Fly Ash Brick(6”)</option>
                                       <option value="Chequer Titles (Flower)">Chequer Titles (Flower)</option>
                                       <option value="Chequer Titles (Check Box">04	Chequer Titles (Check Box)</option>
                                       <option value="Chequer Titles (Diamond)">Chequer Titles (Diamond) </option>
                                       <option value="Chequer Titles (Button)">Chequer Titles (Button)</option>
                                    </select>
                                       
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="uQuantity">Enter Quantity</label>
                                    <input type="number" id='uQuantity' className='form-control' placeholder='Enter Quantity' onChange={(e)=>{
                                        setQuantity(e.target.value)
                                    }} />
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="rate">Enter Rate</label>
                                    <input type="number" id='rate' className='form-control' placeholder='Enter rate' onChange={(e)=>{
                                        setRate(e.target.value)
                                    }} />
                                </div>
                                
                                <br /><br />

<button   className='btn w-100 btn-lg btn-dark' >Add Stock</button> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


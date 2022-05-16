import React,{useState} from 'react'
import axios from "axios"
import "./addinventory.css"
import NavBar from '../Component/NavBar'
import { Link } from 'react-router-dom'
export default function AddInventory() {
    const [Date, setDate] = useState()
    const [NameOfProduct, setNameOfProduct] = useState()
    const [Quantity,setQuantity] = useState(1)
    const [Unit, setUnit] = useState()
    const submit = async (e)=>{
        e.preventDefault()
        const {data} = await axios.post("http://192.168.43.220:5000/api/v1/createInventory",{Date,NameOfProduct,Quantity,Unit})
console.log(data.data);
      setDate(()=>data)
      setNameOfProduct(()=>data)
      setQuantity(()=>data)
      setUnit(()=>data)


}


    return (
        <div>
            <NavBar/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                   <div className='d-flex flex-row justify-content-around'> <h1 style={{
                        fontFamily: 'Merriweather'
                   }}>Add Inventory</h1>
                    </div>
                        <div className="card mt-4">

                            <div className="card-body">
                              
                              
                                <form onSubmit={submit}>
                                <div className='mt-4'>
                                    <label htmlFor="udate">Select Date</label>
                                    <input type="date" id='udate' className='form-control' placeholder='Select the Date' onChange={(e)=>{
                                        setDate(()=>e.target.value)
                                    }} />
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="product"> Materail Name </label>
                                    <select type="text" id='product' className='form-control' placeholder='select material name' onChange={(e)=>{
                                        setNameOfProduct(()=>e.target.value)
                                    }} >
                                       <option value="material">Select Material</option>
                                       <option value="cement">Cement</option>
                                       <option value="sand">Sand </option>
                                       <option value="aggre1">Aggregates (6 mm)</option>
                                       <option value="aggre2">Aggregates (10 mm)</option>
                                       <option value="flyas">	Fly As</option>
                                       <option value="hander">	Hardner</option>
                                       <option value="red">	Colour (Red)</option>
                                       <option value="black">	Colour (Black)</option>
                                       <option value="yellow">	Colour (Yellow)</option>
                                       <option value="yellow">	Fly Ash Brick(4”)</option>
                                       <option value="yellow">	Fly Ash Brick(6”)</option>
                                       <option value="yellow">Chequer Titles (Flower)</option>
                                       <option value="yellow">04	Chequer Titles (Check Box)</option>
                                       <option value="yellow">Chequer Titles (Diamond)</option>
                                       <option value="yellow">Chequer Titles (Button)</option>

                                       
                                        </select>
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="uquantity">Enter Quantity</label>
                                    <input type="number" id='uquantity' className='form-control' placeholder='Enter Quantity' onChange={(e)=>{
                                        setQuantity(()=>e.target.value)
                                    }} />
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="unit"> Unit</label>
                                    <select type="text" id='unit' className='form-control' placeholder='select unit' onChange={(e)=>{
                                        setUnit(()=>e.target.value)
                                    }} >
                                        <option value="Suni">Select Unit</option>
                                        <option value="bag">Bag</option>
                                        <option value="litre">litre</option>
                                        <option value="feet">cubic Feet</option>
                                        <option value="tonne">tonne</option>
                                    </select>
                                </div>
                                <br /><br />

<button   className='btn  align-item-center btn-dark' >submit</button> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


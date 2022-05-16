import logo from './logo.svg';
import './App.css';
import {Routes,Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashbord from './Component/Dashbord';
import AddInventory from './pages/AddInventory';
import ViewInventory from './pages/ViewInventory';
import AddStock from './pages/AddStock';
import ViewStock from './pages/ViewStock';
import NavBar from './Component/NavBar';
import AddInvoiceGenetaion from './pages/AddInvoiceGenetaion';
import ViewInvoiceGeneration from './pages/ViewInvoiceGeneration';
import GeneratePDF from './pages/GeneratePDF';
function App() {
  return (
<BrowserRouter>


<Routes>
  <Route path='/' element={<Login/>}/>
  
<Route path="/dashboard" exact element={<Dashbord/>} />
<Route path="/Addinventory" element={<AddInventory/>}/>
< Route path ="/ViewInventory" element={<ViewInventory/>}/>
<Route path='/AddStock' element={<AddStock/>}/>
<Route path='/ViewStock' element={<ViewStock/>}/>
<Route path='/AddInvoiceGenerataion' element={<AddInvoiceGenetaion/>}/>
<Route path='/ViewInvoiceGenerataion' element={<ViewInvoiceGeneration/>}/>
<Route path="/generatePDF/:id"element={<GeneratePDF/>}/>

</Routes>
</BrowserRouter>
  );
}

export default App;

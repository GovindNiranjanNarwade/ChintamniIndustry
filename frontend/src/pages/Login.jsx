import React,{useState} from 'react'
import './login.css'
import axios from "axios"
import { Link } from 'react-router-dom'
export default function Login() {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [name, setname] = useState()
    const [isLoading, setisLoading] = useState(false)
    const [user, setuser] = useState(false)
    const login = async (e)=>{
        e.preventDefault()
        setisLoading(true)
        const {data} = await axios.post("http://192.168.43.220:5000/api/v1/admin/adminlogin",{email,password,name})
setisLoading(()=>false)
console.log(data);
      setuser(()=>data)
      setname(()=>data)
    //   console.log(data.name);
    }
    return (
        <div>
            <div className="container1">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={login}>
				<div className="login__field">
                <i class="bi bi-person-circle"></i>
                    <label htmlFor="uname">Enter Email</label>
                                    <input type="text" id='uname' className=' login__input form-control' placeholder='User name / Email'
                                     onChange={(e)=>{
                                        setemail(()=>e.target.value)
                                    }} />
				</div>
				<div className="login__field">
                <i class="bi bi-unlock"></i>
                    <label htmlFor="upassword">Enter Password</label>
                                    <input type="password" id='upassword' className='login__input form-control' placeholder='Enter password' onChange={(e)=>{
                                        setpassword(()=>e.target.value)
                                    }} />
				</div>
				<button className="button login__submit">
					<span className="button__text"><Link to="/dashboard">Log In Now</Link></span>
					<i className="button__icon  bi bi-arrow-right"></i>
				</button>				
			</form>

		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>

        </div>
    )
}

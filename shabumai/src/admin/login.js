import { useNavigate } from 'react-router-dom';
import './cssforlogin.css';
import { useState } from "react";
import Swal from 'sweetalert2'
function Login(){
    const Navigate = useNavigate();
    const [username,setusername] = useState("");
    const [pass,setpass] = useState("");
    const check_login = async() =>{
        if(username === 'admin' && pass ==='1234'){
            Swal.fire({
                title: "สำเร็จ",
                text: "",
                icon: "success"
              });
            Navigate("/selecttable")
        }else{
            Swal.fire({
                title: "รหัสผ่านไม่ถูกต้อง",
                text: "กรุณาลองใหม่อีกครั้ง!",
                icon: "error"
              });
        }
    }
    return(
        <div className='loginice'>
            <div className='body1'>
            <div className="login_container">
                <i className='bx bx-user-circle'></i>
                <form className="form-groupice">
                    <input onChange={(e) => setusername(e.target.value)} type="text" id="" name="" placeholder="Username"/>
                    <input onChange={(e) => setpass(e.target.value)} type="password" id="" name="" placeholder="Password"/>
                    <a href="#"><button onClick={check_login} type="button" class="btn-1iceice">Submit</button></a>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Login;
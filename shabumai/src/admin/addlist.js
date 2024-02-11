import { useState } from 'react';
import Logo from './img/logoadmin.png';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
function Addlist(){
    const Navigate = useNavigate();
    const [name_list , setname_list] = useState ("");
    const [img_list , setimg_list] = useState ("");
        const insert = async() => {
            const datares = {
                name:name_list,
                img:img_list
            }
            const res = await axios.post("http://localhost:5000/insertlistorder",{data:datares})
            Swal.fire({
                title: "แจ้งเตือน",
                text: "เพิ่มรายการสำเร็จ",
                icon: "success"
              });
            console.log(res.data)
            Navigate("/listorder")
        }
    
    
    return(
        <div className="addlist">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" style={{width:"40px"}} className="rounded-pill"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/selecttable">รายงานการจองโต๊ะ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/listorder">รายการของสด</a>
                        </li> 
                        <li class="nav-item">
                            <a className="nav-link active" href="/history">รายงานประวัติ</a>
                        </li>  
                    </ul>
                    <form class="d-flex">
                        <button onClick={(e) => Navigate("/")} class="btn btn-danger" type="button">logout</button>
                    </form>
                </div>
            </div>
         </nav>
      <br/>
      <br/>
      <br/>
        <div className="container mt-3">
            <h2>เพิ่มรายการของคุณ</h2>
            <form action="/listorder">
                <div className="mb-3 mt-3">
                    <label for="">ชื่อรายการ:</label>
                    <input onChange={(e) => setname_list(e.target.value)} type="text" className="form-control" id="" placeholder="ป้อนชื่อรายการ" name=""/>
                </div>
                <div className="mb-3">
                    <label for="">รูปภาพรายการ:</label>
                    <input onChange={(e) => setimg_list(e.target.value)} type="text" className="form-control" id="" placeholder="อัพโหลดรูปรายการ" name=""/>
                </div>
                <button onClick={insert}  className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    );
}

export default Addlist;
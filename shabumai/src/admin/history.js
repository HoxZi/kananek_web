import { useEffect, useState } from 'react';
import Logo from './img/logoadmin.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Historys() {
    const Navigate = useNavigate();
    const[data , setdata] = useState([]);
    useEffect(() =>{
        fateData();
    },[])

    const fateData = async() =>{
        const res = await axios.get("http://localhost:3000/histotys")
        console.log(res.data)
        setdata(res.data)
    }

  return (
    <div className="history">
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
      <div className="container-fluid mt-3 table-responsive">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>เลขโต๊ะ</th>
                    <th>ชื่อ</th>
                    <th>นามสกุล</th>
                    <th>เบอร์โทร</th>
                    <th>เวลา</th>
                    <th>จำนวนคน</th>
                    <th>รวมเป็นเงินทั้งสิ้น</th>
                    <th>สถานะ</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((data) => (
                    <tr key={data}>
                        <td>{data.id_his}</td>
                        <td>{data.fname_his}</td>
                        <td>{data.lname_his}</td>
                        <td>{data.tel_his}</td>
                        <td>{(data.time_his === "0" )? ( <>9.00 - 10.30</> 
                        ) : (data.time_his === "2") ? ( <>10.30 - 12.00</>
                        ) : (data.time_his === "3") ? ( <>12.00 - 13.30</>
                        ) : (data.time_his === "4") ? (<>13.30 - 15.00</>
                        ) : (data.time_his === "5") ? (<>15.00 - 16.30</>
                        ) : (data.time_his === "6") ? (<>16.30 - 18.00</>
                        ) : (data.time_his === "7") ? (<>18.00 - 19.30</>
                        ) : (data.time_his === "8") ? (<>19.30 - 21.00</>
                        ) : (data.time_his === "9") ? (<>21.00 - 22.30</>
                        ) : (<></>)
                    
                        }
                        </td>
                        <td>{data.count_customer_his}</td>
                        <td>{data.count_customer_his * 299}</td>
                        <td>
                            {(data.status === 1)?(
                                <>สำเร็จ</>
                            ):(<>ไม่สำเร็จ</>)}
                        </td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Historys;
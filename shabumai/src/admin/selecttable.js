
import Logo from './img/logoadmin.png';
import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
function Selecttable()  {
const Navigate = useNavigate();
const [data, setdata] = useState([]);
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const res = await axios.get('http://localhost:3000/tables')
        console.log(res.data)
        setdata(res.data)
      }

     const deleted = async(data) => {
        console.log(data)
        const ad = {
            fname_his : data.f_name,
            lname_his : data.l_name,
            tel_his : data.tel,
            time_his : data.time,
            count_customer_his : data.c_customer,
            date_his : data.dates,
            status : 0
        }
        const del = {
            id : data.id_table
        }
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "คำเตือน",
            text: "ต้องการนำรายการนี้ออกหรือไม่",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res1 = await axios.post('http://localhost:3000/add_histity',{data :ad})
                const res2 = await axios.delete('http://localhost:3000/deleteselect_table',{data :del})
                fetchData()
              swalWithBootstrapButtons.fire({
                title: "นำรายการออกสำเร็จ!",
                text: "",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "ยกเลิกการการทำ",
                text: "",
                icon: "error"
              });
            }
          });
     }

     //add
     const success = async(data) => {
        console.log(data)
        const ad = {
            fname_his : data.f_name,
            lname_his : data.l_name,
            tel_his : data.tel,
            time_his : data.time,
            count_customer_his : data.c_customer,
            date_his : data.dates,
            status : 1
        }
        const del = {
            id : data.id_table
        }
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "คำเตือน",
            text: "ต้องการสำเร็จรายการยนี้หรือไม่",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            reverseButtons: true
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res1 = await axios.post('http://localhost:3000/add_histity',{data :ad})
                const res2 = await axios.delete('http://localhost:3000/deleteselect_table',{data :del})
                fetchData()
              swalWithBootstrapButtons.fire({
                title: "สำเร็จ!",
                text: "",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "ยกเลิกการกระทำ",
                text: "",
                icon: "error"
              });
            }
          });
     }
  return (
    <div className="selecttable">
       <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={Logo} alt="Logo" style={{width: "40px"}} className="rounded-pill"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="/selecttable">รายงานการจองโต๊ะ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/listorder">รายการของสด</a>
                        </li> 
                        <li class="nav-item">
                            <a className="nav-link" href="/history">รายงานประวัติ</a>
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
                    <th>วันที่</th>
                    <th>จำนวนคน</th>
                    <th>รวมเป็นเงินทั้งสิ้น</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((data) => (

                <tr key={data}>
                    <td>{data.number_table}</td>
                    <td>{data.f_name}</td>
                    <td>{data.l_name}</td>
                    <td>{data.tel}</td>
                    <td>
                    {(data.time === 0 )? ( <>9.00 - 10.30</> 
                        ) : (data.time === 2) ? ( <>10.30 - 12.00</>
                        ) : (data.time === 3) ? ( <>12.00 - 13.30</>
                        ) : (data.time === 4) ? (<>13.30 - 15.00</>
                        ) : (data.time === 5) ? (<>15.00 - 16.30</>
                        ) : (data.time === 6) ? (<>16.30 - 18.00</>
                        ) : (data.time === 7) ? (<>18.00 - 19.30</>
                        ) : (data.time === 8) ? (<>19.30 - 21.00</>
                        ) : (data.time === 9) ? (<>21.00 - 22.30</>
                        ) : (<></>)
                        }
                    </td>
                    <td>{data.dates}</td>
                    <td>{data.c_customer}</td>
                    <td>{data.c_customer * 299}</td>
                    <td>
                        <button onClick={(e) => success(data)} type="button" className="btn btn-success">สำเร็จ</button>
                    </td>
                    <td>
                        <button onClick={(e) => deleted(data)} type="button" className="btn btn-danger">นำออก</button>
                    </td>
                </tr>
                ))}
                
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Selecttable;
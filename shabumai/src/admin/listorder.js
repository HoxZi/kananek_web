import { useEffect, useState } from 'react';
import Logo from './img/logoadmin.png';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
function Listorder() {
const Navigate = useNavigate();
const [data , setdata] =useState ([]);
        useEffect(() => {
            fateData();
        },[]);

        const fateData = async() => {
            const res = await axios.get("http://localhost:5000/list_order")
            console.log(res.data)
            setdata(res.data)
        }

const deletes = async(data) => {
   
    console.log(data)

    const del = {
        id : data.id_list
    }
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "ยืนการลบรายการ",
        text: "ตรวจสอบความถูกต้องของรายการก่อนการลบ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await axios.delete("http://localhost:5000/deletelistorder",{data :del})
            fateData()
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
}



  return (
    <div className="listorder">
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
                            <a className="nav-link" href="/selecttable">รายงานการจองโต๊ะ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/listorder">รายการของสด</a>
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
                    <th>รหัส</th>
                    <th>รายการ</th>
                    <th>รูปภาพรายการ</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data && data.map ((data) => (
                    <tr key={data}>
                        <td>{data.id_list}</td>
                        <td>{data.name_list}</td>
                        <td>
                            <img src={data.img_list}  style={{width: "100px"}}/>
                        </td>
                        <td>
                            <button onClick={(e) => deletes(data)} type="button" className="btn btn-danger">นำออก</button>
                        </td>
                    </tr>
                ))}
              
            </tbody>
        </table>
      </div>

      <div className="boxadd" style={{textAlign: "center"}}>
            <a onClick={(e) =>Navigate("/addlist")}><button type="button" style={{width: "200px"}} className="btn btn-success">
                เพิ่มรายการ
            </button></a>
      </div>
    </div>
  );
}

export default Listorder;
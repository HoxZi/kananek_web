import { useState } from "react";
import "./styletable.css";
import axios  from 'axios';
import Swal from 'sweetalert2'
function Select_t() {
    const url = new URLSearchParams(window.location.search);
    const id = url.get("id");
    const [f_name , setf_name] = useState ("");
    const [l_name , setl_name] = useState ("");
    const [tel , settel] = useState ("");
    const [time , settime] = useState ("");
    const [dates , setdates] = useState ("");
    const [c_customer , setc_customer] = useState ("");
        const insert = async() => {
          if(f_name !== "" && l_name !== "" && tel !== "" && dates !== "" && c_customer !== "" ){
            const tt = {
              number_table:id,
              dates:dates,  
              time:time,          
            } 
            const datares = {
              number_table:id,
              f_name:f_name,
              l_name:l_name,
              tel:tel,
              time:time,
              dates:dates,
              c_customer:c_customer              
            }
  
              const res = await axios.get("http://localhost:3000/st", {params:tt})
              const data = res.data;
              if(data.length > 0){
                Swal.fire("เต็มแล้ว");
              } else {
                const res = await axios.post("http://localhost:3000/select_table", {data:datares})
                Swal.fire({
                  title: "แจ้งเตือน",
                  text: "จองโต๊ะสำเร็จ",
                  icon: "success"
                });
              }
              console.log(res.data)
          }else{
            Swal.fire({
              title: "แจ้งเตือน",
              text: "กรุณากรอกข้อมูลให้ครบถ้วน",
              icon: "error"
            });
          }
          
        }
  return (
    <div className="select_t">
    <div className="body1">
      <div className="containerice">
        <h3>โต๊ะอาหาร {id}</h3>
        <div className="form">
          <form>
            <div className="form-group">
              <input onChange={(e) => setf_name(e.target.value)} type="text" id="" name="" placeholder="ชื่อจริง..." />
              <input onChange={(e) => setl_name(e.target.value)} type="text" id="" name="" placeholder="นามสกุล..." />
            </div>
            <div className="form-group">
              <input onChange={(e) => settel(e.target.value)} type="text" id="" name="" placeholder="เบอร์ติดต่อ.." />
              <input onChange={(e) => setdates(e.target.value)} type="date" id="" name="" placeholder="วันที่" />
            </div>
            <div className="form-group2">
              <h5>เลือกเวลา</h5>
              <p>
                *** หมายเหตุ ช่วงเวลาการจองที่แสดงอยู่คือช่วงเวาลาที่ว่าง ***
              </p>
              <select onChange={(e) => settime(e.target.value)} id="" name="">
                <option value="1">9.00 - 10.30 น.</option>
                <option value="2">10.30 - 12.00 น.</option>
                <option value="3">12.00 - 13.30 น.</option>
                <option value="4">13.30 - 15.00 น.</option>
                <option value="5">15.00 - 16.30 น.</option>
                <option value="6">16.30 - 18.00 น.</option>
                <option value="7">18.00 - 19.30 น.</option>
                <option value="8">19.30 - 21.00 น.</option>
                <option value="9">21.00 - 22.30 น.</option>
              </select>
            </div>
            <div className="form-group2">
              <input onChange={(e) => setc_customer(e.target.value)} type="text" id="" name="" placeholder="จำนวนคน.." />
            </div>
            <a href="#">
              <button onClick={insert} type="button" className="btn-1ice">
                Submit
              </button>
            </a>
          </form>
          <p className="comeblack">
            <a href="/"> กลับสู่หน้าเดิม</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Select_t;

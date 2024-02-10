import { useNavigate } from 'react-router-dom';
import './style.css';
import './stylehome.css';
import axios  from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
function App() {
    const Navigate = useNavigate()
    const count = []
    for (let i = 1 ; i<31; i++) {
        count.push([i])
    }
    const [data , setdata] =useState ([]);
        useEffect(() => {
            fateData();
        },[]);

        const fateData = async() => {
            const res = await axios.get("http://localhost:3000/list_order")
            console.log(res.data)
            setdata(res.data)
        }

        const checkbutton = async() => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: "btn btn-success",
                  cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
              });
              swalWithBootstrapButtons.fire({
                title: "คำเตือน",
                text: "ต้องการจัดการข้อมูลหรือไม่ (สำหรับผู้ดูแลเท่านั้น!)",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire({
                    title: "ยืนยันเข้าสู่ระบบ!",
                    text: "",
                    icon: "success"
                  });
                  Navigate("/login");
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
    <div className="App">
      <header className="headerice">
        <a href="#" className="logo">Shabu mai khrap</a>
        <input type="checkbox" id="check"/>
        <label for="check" className="icons">
            <i className='bx bx-menu' id="open-menu"></i>
            <i className='bx bx-x' id="close-menu"></i>
        </label>

        <nav className="navbarice">
            <a href="#home">หน้าหลัก</a>
            <a href="#box2">ของสดวันนี้</a>
            <a href="#box3">จองโต๊ะอาหาร</a>
            <a href="#box4">เกี่ยวกับเรา</a>
        </nav>
    </header>
    {/* <!-- หน้าหลัก --> */}
    <div className="container1" id="home">
        <img src="https://media.discordapp.net/attachments/1203729179045007432/1203729356086579220/logo_ban.png?ex=65d22752&is=65bfb252&hm=70ddb3c7cedb11cb6c30d0ba4c459b8dcd154ec8c5b85edf631c96c7547b5944&=&format=webp&quality=lossless&width=625&height=625"/>
        <div className="btns">
            <a href="#box2"><button type="button" className="btn-1">เข้าสู่ร้านของเรา</button></a>
        </div>
    </div>
    {/* <!-- สิ้นสุดหน้าหลัก --> */}

    <div className="container2" id="box2">
        <div className="box-slide">
        <div className="slider-wrapper">
          <ul className="image-list">
                {data && data.map ((data) =>(
                    <img className="image-item"
                    src={data.img_list}
                    alt="img-1" 
                    />
                ))};
                
          </ul>
        </div>
        <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div className="scrollbar-thumb"></div>
          </div>
        </div>
        </div>
      </div>

    {/* <!-- หน้าจองโต๊ะ --> */}
    <div className="container3" id="box3">
        <h3>จองโต๊ะอาหาร</h3>
        <div className="tableice">
            {count.map((id) => (
                <a key={id} onClick={(e)=>Navigate('/select_t?id='+id)}><div className="table-itemice">
                {id}
                </div></a>
            ))
            }
            
            {/* <a onClick={(e)=>Navigate('/select_t?id=2')}><div className="table-itemice">
                2
            </div></a>
            <a onClick={(e)=>Navigate('/select_t?id=2')}><div className="table-itemice">
                3
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                4
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                5
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                6
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                7
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                8
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                9
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                10
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                11
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                12
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                13
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                14
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                15
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                16
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                17
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                18
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                19
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                20
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                21
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                22
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                23
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                24
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                25
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                26
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                27
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                28
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                29
            </div></a>
            <a href="/selecttable.html"><div className="table-itemice">
                30
            </div></a> */}

        </div>
    </div>
    {/* <!-- สิ้นสุดหน้าจองโต๊ะ --> */}

    {/* <!-- หน้าเกี่ยวกับเรา --> */}
    <div className="container4" id="box4">
       <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.80238040648!2d99.89366947580537!3d19.028427853463064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d83369b9fd7285%3A0x48422f267bc2c6ec!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lie4Liw4LmA4Lii4Liy!5e0!3m2!1sth!2sth!4v1706418974830!5m2!1sth!2sth" style={{width: "600",height: "450", border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
       <div className="textfoot">
          <p>Email : shabumai@gmail.com</p>
          <p>Tel : 083-437-7487</p>
       </div>
       {/* <!-- สิ้นสุดหน้าเกี่ยวกับเรา --> */}
    </div>
    <div className="credit">
        <p onClick={checkbutton}>© G65203 COMPUTER ENGINEERING UNIVERSITY OF PHAYAO.</p>
      </div>
    </div>
  );
}

export default App;

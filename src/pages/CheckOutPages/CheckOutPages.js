import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from "./Checkout.module.css";
import "./Checkout.css"
import { CheckOutlined, CloseOutlined, UserOutlined, SmileOutlined, HomeOutlined } from '@ant-design/icons'
import { datGheAction, datVeAction, layChiTietPhongVeAction } from '../../redux/action/QuanLyDatVeActions';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { CHUYEN_TAB, DAT_VE } from '../../redux/types/QuanLyDatVeType';
import _ from 'lodash';
import { ThongTinDatVe } from './../../_core/models/ThongTinDatVe';

import { Tabs } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/action/QuanLyNguoiDungAction';
import moment from 'moment';
import { connection } from '../../index';
import { TOKEN, USER_LOGIN } from '../../util/settings/config';
export default function CheckOutPages(props) {
  const { userLogin,thongTinNguoiDung  } = useSelector(state => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, DanhSachGheDaDat,activeTab ,danhSachGheKhachDat} = useSelector(state => state.QuanLyDatVeReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const nav =useNavigate();
  useEffect(() => { 
    dispatch(layChiTietPhongVeAction(id))
    const action = layThongTinNguoiDungAction();
    dispatch(action);

//     connection.on('datVeThanhCong', () =>  {
//       dispatch(action);
//   })
//   connection.invoke('loadDanhSachGhe',id);
//     //Load danh sách ghế đang đặt từ server về (lắng nghe tín hiệu từ server trả về)
//     connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
//       console.log('danhSachGheKhachDat',dsGheKhachDat);
//       //Bước 1: Loại mình ra khỏi danh sách 
//       dsGheKhachDat = dsGheKhachDat.filter(item => item.taiKhoan !== userLogin.taiKhoan);
//       //Bước 2 gộp danh sách ghế khách đặt ở tất cả user thành 1 mảng chung 

//       let arrGheKhachDat = dsGheKhachDat.reduce((result,item,index)=>{
//           let arrGhe = JSON.parse(item.danhSachGhe);

//           return [...result,...arrGhe];
//       },[]);

//       //Đưa dữ liệu ghế khách đặt cập nhật redux
//       arrGheKhachDat = _.uniqBy(arrGheKhachDat,'maGhe');

//       //Đưa dữ liệu ghế khách đặt về redux
//       dispatch({
//           type:'DAT_GHE',
//           arrGheKhachDat
//       })
      
//    })

//    //Cài đặt sự kiện khi reload trang
//    window.addEventListener("beforeunload", clearGhe);

//    return () => {
//        clearGhe();
//        window.removeEventListener('beforeunload',clearGhe);
//    }
}, [])

//   const clearGhe = function(event) {
        
//     connection.invoke('huyDat',userLogin.taiKhoan,props.match.params.id);

        
// }

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe

  const renderSeats = () => {
    return danhSachGhe.map((item, index) => {
   
      let classGheVip = item.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = item.daDat === true ? 'gheDaDat' : '';
      let classGheDangDat = '';
      let classGheDaDuocDat = "";
      let classGheKhachDaDat
      let findIndexGheKhachDat =danhSachGheKhachDat.findIndex(gheKD =>gheKD.maGhe ===item.maGhe);
      if(findIndexGheKhachDat !== -1){
        classGheKhachDaDat="gheKhachDat";
      }
      if (userLogin.taiKhoan === item.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat"
      }
      const indexGheDD = DanhSachGheDaDat.findIndex(gheDD => gheDD.maGhe === item.maGhe);
      if (indexGheDD !== -1) {
        classGheDangDat = "gheDangDat"
      }
      return <Fragment key={index}>
        <button disabled={classGheDaDat} className={`ghe  ${classGheDaDat} ${classGheVip} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDaDat}`} onClick={() => {
          dispatch({
            type: DAT_VE,
            gheDuocChon: item,
          })

          // dispatch(datGheAction(item,id))
        }}>
          {item.daDat ? <CloseOutlined style={{ marginBottom: 7.5 }}></CloseOutlined> : item.stt}

        </button>


      </Fragment>

    })
  }

  const renderThongtin = () => {
    return <div className='grid grid-cols-12'>
      <div className='col-span-9'>
        <div className="flex flex-col items-center mt-5">


          <div className="bg-black " style={{ width: '80%', height: 15 }}>
          </div>
          <div className={`${style['trapezoid']} text-center`}>
            <h3 className="mt-3 text-black">Màn hình</h3>
          </div>
          <div>
            {renderSeats()}
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <table className=" divide-y divide-gray-200 w-2/3">
            <thead className="bg-gray-50 p-5">
              <tr>
                <th>Ghế chưa đặt</th>
                <th>Ghế đang đặt</th>
                <th>Ghế vip</th>
                <th>Ghế đã đặt</th>
                <th>Ghế mình đặt</th>
                <th>Ghế khách đang đặt</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td><button className="ghe text-center"> <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                <td><button className="ghe gheDangDat text-center"> <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                <td><button className="ghe gheVip text-center"><CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                <td><button className="ghe gheDaDat text-center"> <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                <td><button className="ghe gheDaDuocDat text-center"> <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                <td><button className="ghe gheKhachDat text-center"> <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>

              </tr>
            </tbody>
          </table>
        </div>

      </div>
      <div className='col-span-3'>
        <h3 className='text-green-400 text-center'> {DanhSachGheDaDat.reduce((tongTien, ghe, index) => {
          return tongTien += ghe.giaVe;
        }, 0).toLocaleString()}Đ</h3>
        <hr></hr>
        <h3 className='text-xl mt-2'>{thongTinPhim.tenPhim}</h3>
        <p>Địa điểm :{thongTinPhim.diaChi}</p>
        <p>Ngày chiếu : {thongTinPhim.ngayChieu} -{thongTinPhim.gioChieu} {thongTinPhim.tenRap}</p>
        <hr></hr>
        <div className='flex flex-row my-2 justify-between'>
          <div className=''><span className='text-red-400'>Ghế </span>
            {_.sortBy(DanhSachGheDaDat, ['stt']).map((gheDD, index) => {
              return <span key={index} className="text-green-500 text-xl"> {gheDD.stt}</span>
            })}

          </div>
          <div className=''><span className='text-right text-green-800 text-lg'>  {DanhSachGheDaDat.reduce((tongTien, ghe, index) => {
            return tongTien += ghe.giaVe;
          }, 0).toLocaleString()}Đ</span></div>
        </div>
        <hr></hr>
        <div className='my-2'>
          <i>Email</i><br></br>
          {userLogin.email}
        </div>
        <hr></hr>
        <div className='my-5'>
          <i>SDT</i><br></br>
          {userLogin.soDT}
        </div>
        <hr></hr>
        <div className="mb-0 h-full flex flex-col items-center" style={{ marginBottom: 0 }}>
          <div onClick={() => {

            const thongtinDatVe = new ThongTinDatVe();
            thongtinDatVe.maLichChieu = id;
            thongtinDatVe.danhSachVe = DanhSachGheDaDat;
            // console.log("thongtinDatVe",thongtinDatVe)
            dispatch(datVeAction(thongtinDatVe))
          }} className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer">
            ĐẶT VÉ
          </div>
        </div>
      </div>
    </div>
  }

  const ketQuaDatVe = () => {
   



  const renderTicketItem = function () {
    
      return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
          const seats = _.first(ticket.danhSachGhe);

          return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
                  <div className="flex-grow">
                      <h2 className="text-pink-500 title-font font-medium text-2xl">{ticket.tenPhim}</h2>
                      <p className="text-gray-500"><span className="font-bold">Giờ chiếu:</span> {moment(ticket.ngayDat).format('hh:mm A')} - <span className="font-bold">Ngày chiếu:</span>  {moment(ticket.ngayDat).format('DD-MM-YYYY')} .</p>
                      <p><span className="font-bold">Địa điểm:</span> {seats.tenHeThongRap}   </p>
                      <p>
                          <span className="font-bold">Tên rạp:</span>  {seats.tenCumRap} - <span className="font-bold">Ghế:</span>  {ticket.danhSachGhe.map((ghe, index) => { return <span className="text-green-500 text-xl" key={index}> [ {ghe.tenGhe} ] </span> })}
                      </p>
                  </div>
              </div>
          </div>
      })
  }

  return <div className="p-5">

      <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-purple-600 ">Lịch sử đặt vé khách hàng</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy xem thông tin địa và thời gian để xem phim vui vẻ bạn nhé !</p>
              </div>
              <div className="flex flex-wrap -m-2">
                  {renderTicketItem()}
                  {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://picsum.photos/200/200" />
                          <div className="flex-grow">
                              <h2 className="text-gray-900 title-font font-medium">Lật mặt 48h</h2>
                              <p className="text-gray-500">10:20 Rạp 5, Hệ thống rạp cinestar bhd </p>
                          </div>
                      </div>
                  </div> */}

              </div>
          </div>
      </section>

  </div>
  }
  const onChange = (key) => {
    dispatch({type:CHUYEN_TAB,data123:key});
  };
  const items = [
    {
      key: 1,
      label: 'Chọn ghế và thanh toán',
      children: renderThongtin(),
    },
    {
      key: 2,
      label: 'Kết quả đặt vé',
      children: ketQuaDatVe(),
    },
    {
      key:3,
      label:<div className="text-center" style={{display:'flex', justifyContent:'center',alignItems:'center'}}><NavLink to="/"><HomeOutlined style={{marginLeft:10,fontSize:25}} /></NavLink></div>
    }

  ];

  const operations = <Fragment>
  {!_.isEmpty(userLogin) ? <Fragment> <button onClick={()=>{
      nav('/profile')
  }}> <div style={{width:50,height:50,display:'flex',justifyContent:'center',alignItems:'center'}} className="text-2xl ml-5 rounded-full bg-red-200">{userLogin.taiKhoan.substr(0,1)}</div>Hello ! {userLogin.taiKhoan}</button> 
  <button onClick={()=>{
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);
      nav('/home');
      window.location.reload();
  }} className="text-blue-800">Đăng xuất</button> </Fragment>: ''} 


</Fragment> 
  return (
    <div className='container'>
      <Tabs tabBarExtraContent={operations} defaultActiveKey={activeTab} activeKey={activeTab} items={items} onChange={onChange} />

    </div>
  )
}






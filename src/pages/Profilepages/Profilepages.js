import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CapNhapThongTinAction, layThongTinNguoiDungAction } from '../../redux/action/QuanLyNguoiDungAction';
import { Tabs, Input,InputNumber  } from 'antd'

import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import _ from 'lodash';
import moment from 'moment';
import { useFormik } from 'formik';
import { GROUPID } from '../../util/settings/config';
const THongTinNguoiDung1 = [
  { thongTin1: "Thông tin người dùng", Icon: <UserOutlined></UserOutlined> },
  { thongTin1: "Lịch sử đặt vé", Icon: <InfoCircleOutlined></InfoCircleOutlined> }
];
export default function Profilepages() {
  const [hidden, setHiddent] = useState(true);
 
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
  const [thongTinNguoiDung1, setthongTinNguoiDung] = useState({ thongtincanThiet: thongTinNguoiDung });
  const changing =(e)=>{
   
      formik.setFieldValue(e.target.name,e.target.value);
  }
  const changeNumber =(name,e)=>{
      formik.setFieldValue(name, e);
  }
  useEffect(() => {
    if (Object.keys(thongTinNguoiDung).length === 0) {
      async function getThongTin() {

        await dispatch(layThongTinNguoiDungAction())

      }
      getThongTin();
    }
    else{
      setHiddent(false);
    }

  }
    , []);
    const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
 
        email: thongTinNguoiDung.email,
        hoTen: thongTinNguoiDung.hoTen,
        soDT:thongTinNguoiDung.soDT,
        taiKhoan: thongTinNguoiDung.taiKhoan,
        matKhau:thongTinNguoiDung.matKhau,
        maNhom:GROUPID,
        maLoaiNguoiDung:"KhachHang"
      },
 
      onSubmit: values => {
      
             dispatch(CapNhapThongTinAction(values))   
             setHiddent(true)
      },
 
    });
  const renderThongTin = (i) => {
    if (i === 0) {
      if (hidden) {
        return <> <div className='grid grid-cols-2 gap-4'>
          <div >
            <p>Email : <span>{email}</span></p>
          </div>
          <div >
            <p>Họ tên : <span>{hoTen}</span></p>
          </div>
          <div >
            <p>Số điện thoại : <span>{soDT}</span></p>
          </div>
          <div >
            <p>Tài khoản : <span>{taiKhoan}</span></p>
          </div>
          <div >
            <p>Mật khẩu : <span>{matKhau}</span></p>
          </div>
        
        </div>
          <button className='btn btn-success' onClick={() => {
            updateTrangThai();
        }}>Cập nhập</button>
        </>
      }
      else {
        return <form onSubmit={formik.handleSubmit}> <div className='grid grid-cols-2 gap-4'>
          <div >
            <p>Email : <span> <Input defaultValue={email} name='email'  onChange={(e)=>{
              changing(e)
              
            }}/></span></p>

          </div>
          <div >
            <p>Họ tên : <span><Input defaultValue={hoTen} name='hoTen'  onChange={(e)=>{
              changing(e)
              
            }}/></span></p>

          </div>
          <div >
            <p>Số điện thoại : <span><InputNumber min={1}  defaultValue={soDT} name='soDT'  onChange={(e)=>{
             changeNumber("soDT",e)
             
            }}/></span></p>

          </div>
          <div >
            <p>Tài khoản : <span><Input defaultValue={taiKhoan} name='taiKhoan'  onChange={(e)=>{
              changing(e)
            
            }}/></span></p>

          </div>
          <div >
            <p>Mật khẩu : <span><Input.Password defaultValue={matKhau} name='matKhau' onChange={(e)=>{
              changing(e)
             
            }}/></span></p>

          </div>

          
        </div>
        <button className='btn btn-success' onClick={() => {
          }}>Thay đổi trạng thái</button>
        </form>
      }
    }
    else {
      return thongTinDatVe?.map((ticket, index) => {
        const seats = _.first(ticket.danhSachGhe);
        return <div className="p-2 lg:w-10/12 md:w-9/12 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-1/3 h-4/5 bg-gray-100 object-cover object-center flex-shrink-0  mr-4" src={ticket.hinhAnh} />
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
  }
    const updateTrangThai =()=>{
      setHiddent(false)
    }
  
  const [tabPosition, setTabPosition] = useState('top');

  const { email, hoTen, matKhau, soDT, taiKhoan, thongTinDatVe } = thongTinNguoiDung;

  return (
    <div className='text-center md:w-3/4 md:mx-auto'>

      <Tabs
        tabPosition={tabPosition}
        items={new Array(THongTinNguoiDung1.length).fill(THongTinNguoiDung1).map((thongtin, i) => {

          const id = String(i + 1);
          return {
            label: `${thongtin[i].thongTin1} `,
            key: id,
            children: renderThongTin(i),
            icon: thongtin[i].icon,
          };
        })}
      />
    </div>
  )
}

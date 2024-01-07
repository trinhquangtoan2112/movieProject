import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LayThongTinNguoiDungAdmin, LayThongTinNguoiDungAdminALL, TimKiemNguoiDung, TimKiemNguoiDungTheTuKhoa, XoaNguoiDUng } from '../../../redux/action/QuanLyNguoiDungAction';
import { NavLink, useNavigate } from 'react-router-dom';
let tuKhoa = "";
export default function UserAdmin() {
     const nav =useNavigate();
    const dispatch = useDispatch();
    const { content } = useSelector(state => state.QuanLyNguoiDungReducer);
    let stt = 1;
   
    useEffect(() => {
        async function getThongTin() {
            await dispatch(LayThongTinNguoiDungAdminALL(1))

        }
        getThongTin()
    }, [])
   
const DeleteNguoiDUng =(item)=>{
    dispatch(XoaNguoiDUng(item))
}
    let stt2 = 0;
    const renderTable = () => {
        return content.items?.map((item, index) => {
            ++stt2
            return <tr key={index}>
                <td className="border px-4 py-2">{stt2}</td>
                <td className="border px-4 py-2">{item.taiKhoan}</td>
                <td className="border px-4 py-2">{item.matKhau}</td>
                <td className="border px-4 py-2">{item.hoTen}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.soDt}</td>
                <td className="border px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{
                        dispatch(TimKiemNguoiDung(item.taiKhoan))
                        setTimeout(()=>{
                            nav("/admin/Edit")
                        },3000)
                       
                    }}>Edit</button>
                    <button className="bg-red-500 hover:bg-white hover:text-red-600  text-black font-bold py-2 px-4 rounded-full"
                    
                    onClick={()=>{
                          DeleteNguoiDUng(item.taiKhoan)
                    }}>Xóa</button>
                </td>

            </tr>

        },

        )
    }
    const renderFooter = () => {

        const pageLinks = [];

        for (let i = 0; i < content.totalPages; i++) {

            if (i === content.currentPage - 1) {
                pageLinks.push(<p key={i} className='text-black px-2'>{stt}</p>);

            }

            else {
                pageLinks.push(<p key={i} className='text-blue-600 px-2 hover:text-black' style={{ cursor: 'pointer' }} onClick={() => {
                    if (tuKhoa === "") {
                        dispatch(LayThongTinNguoiDungAdminALL(i + 1))

                    } else {
                        dispatch(TimKiemNguoiDungTheTuKhoa(tuKhoa, i + 1))

                    }
                }}>{stt}</p>);
            }

            stt++;
        }

        return pageLinks



    }

    const timKiems = (e) => {
        tuKhoa = e.target.value;
    }

    const timKiemDispatch = () => {
        setTimeout(() => {
            dispatch(TimKiemNguoiDungTheTuKhoa(tuKhoa, 1))
        }, 3000)

    }
    return (
        <div>
            <NavLink to="AddUser " >Thêm người dùng</NavLink>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "80%" }}>
                <input style={{ width: "80%", padding: "0 20px" }} placeholder='Nhập tên cần tím kiếm' name="tuKhoa" onChange={(e) => {
                    timKiems(e)
                }}></input>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => {
                    timKiemDispatch()
                }}>Tìm kiếm</button></div>
            <table className='table-auto'>
                <thead>
                    <tr>
                        <th className='px-4 py-2'>STT</th>
                        <th className='px-4 py-2'>Tài khoản</th>
                        <th className='px-4 py-2'>Mật khẩu</th>
                        <th className='px-4 py-2'>Họ tên</th>
                        <th className='px-4 py-2'>Email</th>
                        <th className='px-4 py-2'>Số điện thoại</th>
                        <th className='px-4 py-2'>Thao tác</th>
                    </tr>
                </thead>
                <tbody>

                    {renderTable()}

                </tbody>
                <tfoot>

                </tfoot>
            </table>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {renderFooter()}

            </div>
        </div>
    )
}

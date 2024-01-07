import React, { useEffect, useState } from 'react'
import { CapNhapNguoiDung, getMaLoai } from '../../../../redux/action/QuanLyNguoiDungAction';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function EditUser() {
    const dispatch = useDispatch();
    
    const nav = useNavigate()
    const { maLoaiNguoiDung, thongTinCanCapNhap } = useSelector(state => state.QuanLyNguoiDungReducer);

    console.log("maLoaiNguoiDung", thongTinCanCapNhap)
    
    const [state, setState] = useState({
        errtaiKhoan: '',
        errmatKhau: '',
        erremail: "",
        errhoTen: "",
        errsoDt: "",

    })
    const [disabled, setDisabled] = useState(false);
    const formik = useFormik({
        initialValues: {
            taiKhoan: thongTinCanCapNhap.taiKhoan,
            matKhau: thongTinCanCapNhap.matKhau,
            email: thongTinCanCapNhap.email,
            hoTen: thongTinCanCapNhap.hoTen,
            soDt: thongTinCanCapNhap.soDt,
            maNhom: "GP01",
            maLoaiNguoiDung:thongTinCanCapNhap.maLoaiNguoiDung,
        },
        onSubmit: values => {


            setTimeout(() => {
                if (disabled === true) {
                    dispatch(CapNhapNguoiDung(values))
                } else {
                    alert("Vui lòng điền đầy đủ thông tin")

                }
            }, 2000)

            console.log(values)

        },
    });
    useEffect(() => {
        dispatch(getMaLoai())
    }, [])
    useEffect(() => {
        const allValuesEmpty = Object.values(formik.values).some(value => value === "");
        const allValuesEmpty1 = Object.values(state).some(value => value !== "");
        if (!allValuesEmpty && !allValuesEmpty1) {
            setDisabled(true)
        } else {
            setDisabled(false)

        }

    }, [state, formik.values])
 
    const changing = async (e) => {
        await formik.setFieldValue(e.target.name, e.target.value)
        if (e.target.value === "") {
            await setTimeout(() => {
                setState({ ...state, [`err${e.target.name}`]: "Không được bỏ trống" });

            }, 300)
        }
        else {
            setState({ ...state, [`err${e.target.name}`]: "" });

        }


    }
    const renderOption = () => {
        return maLoaiNguoiDung?.map((item, index) => {
            return {
                label: item.tenLoai,
                value: item.maLoaiNguoiDung,
            }
        })
    }
    const changingOption = (value) => {
        console.log(value)
        formik.setFieldValue("maLoaiNguoiDung", value);
    }
    return (
        <div className=' '>
            <div className=' md:w-12/12 md:flex md:justify-center'>
                <form onSubmit={formik.handleSubmit} className="md:w-4/5 md:flex md:justify-center md:items-center  flex-col">
                    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 md:w-10/12 md:max-w-2xl">
                        <div className="mt-12">
                            <div>
                                <div>
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">Tài khoản</div>
                                    <input disabled name="taiKhoan" onChange={(e) => {
                                        changing(e)
                                    }} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào tài khoản"
                                        defaultValue={formik.initialValues.taiKhoan} />
                                    <span className='text-red-600'>{state.errtaiKhoan}</span>
                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            Mật khẩu
                                        </div>


                                    </div>
                                    <input defaultValue={formik.initialValues.matKhau} type="password" name="matKhau" onChange={(e) => {
                                        changing(e)
                                    }} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào mật khẩu" />
                                    <span className='text-red-600'>{state.errmatKhau}</span>
                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            Email
                                        </div>


                                    </div>
                                    <input defaultValue={formik.initialValues.email} type="text" name="email" onChange={(e) => {
                                        changing(e)
                                    }} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào email" />
                                    <span className='text-red-600'>{state.erremail}</span>
                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            Số điện thoại
                                        </div>


                                    </div>
                                    <input defaultValue={formik.initialValues.soDt} type="number" name="soDt" onChange={(e) => {
                                        changing(e)
                                    }} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào số điện thoại" />
                                    <span className='text-red-600'>{state.errsoDt}</span>
                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            Họ tên
                                        </div>


                                    </div>
                                    <input defaultValue={formik.initialValues.hoTen} type="type" name="hoTen" onChange={(e) => {
                                        changing(e)
                                    }} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào họ tên" />
                                    <span className='text-red-600'>{state.errhoTen}</span>
                                </div>
                                <div className="mt-8">
                                    <p>Loại người dùng</p>
                                    <div className="flex justify-between items-center">

                                        <Select defaultValue={formik.initialValues.maLoaiNguoiDung} placeholder={formik.initialValues.maLoaiNguoiDung ==="KhachHang"?"Khách hàng" :"Quản trị"} style={{ width: "80%", }} options={renderOption()} onChange={(value) => {
                                            changingOption(value)
                                        }}>

                                        </Select>

                                    </div>
                                    <span className='text-red-600'>{state.erremail}</span>
                                </div>
                                <div className="mt-9 ">
                                    <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
          shadow-lg">
                                       Cập nhập người dùng 
                                    </button>
                                </div>

                            </div>



                        </div>
                    </div>
                </form></div>

        </div>
    )
}
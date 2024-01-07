import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { DangKyAction } from '../../redux/action/QuanLyNguoiDungAction';

export default function RegisterPages(props) {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    errtaiKhoan: '',
    errmatKhau: '',
    erremail: "",
    errhoTen: "",
    errsoDt: "",
    errmatKhau1: ""
  })
  const [disabled, setDisabled] = useState(false);
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: "",
      hoTen: "",
      soDt: "",
      maNhom: "GP01",
    },
    onSubmit: values => {


      setTimeout(() => {
        if (disabled === true) {
            dispatch(DangKyAction(values))
        } else {
         alert("Vui lòng điền đầy đủ thông tin")

        }
      }, 2000)



    },
  });
  useEffect(() => {
    const allValuesEmpty = Object.values(formik.values).some(value => value === "");
    const allValuesEmpty1 = Object.values(state).some(value => value !== "");
    if (!allValuesEmpty && !allValuesEmpty1) {
      setDisabled(true)
    }else{
      setDisabled(false)

    }

  }, [state, formik.values])

  const changing = async (e) => {
    await formik.setFieldValue(e.target.name, e.target.value)
    if (e.target.value === "") {
      await setTimeout(() => {
        setState({ ...state, [`err${e.target.name}`]: "Không được bỏ trống" });
       
      }, 1000)
    }
    else {
      setState({ ...state, [`err${e.target.name}`]: "" });
      
    }

    if (e.target.name === "matKhau1") {

      if (e.target.value !== formik.values["matKhau"]) {
        setTimeout(() => {
          setState({ ...state, errmatKhau: "Mật khẩu và nhập lại mật khẩu phải bằng nhau", [`err${e.target.name}`]: "Mật khẩu và nhập lại mật khẩu phải bằng nhau" });
        
        }, 1000)
      } else {
         setTimeout(() => {
          setState({ ...state, errmatKhau: "", errmatKhau1: "" });
        }, 1000)
      }
    }
  }

  return (
    <div className=' '>
      <div className=' md:w-12/12 md:flex md:justify-center'>
        <form onSubmit={formik.handleSubmit} className="md:w-4/5 md:flex md:justify-center md:items-center  flex-col">
          <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div className="cursor-pointer flex items-center">
              <div>
                <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{ enableBackground: 'new 0 0 225 225' }} xmlSpace="preserve">
                  <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                " }} />
                  <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                    <g>
                      <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">CYBERLEARN</div>
            </div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 md:w-10/12 md:max-w-2xl">
            <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
xl:text-bold">Đăng ký</h2>
            <div className="mt-12">
              <div>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">Tài khoản</div>
                  <input name="taiKhoan" onChange={(e) => {
                    changing(e)
                  }} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào tài khoản" />
                  <span className='text-red-600'>{state.errtaiKhoan}</span>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Mật khẩu
                    </div>


                  </div>
                  <input type="password" name="matKhau" onChange={(e) => {
                    changing(e)
                  }} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào mật khẩu" />
                  <span className='text-red-600'>{state.errmatKhau}</span>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Nhập lại Mật khẩu
                    </div>


                  </div>
                  <input type="password" name="matKhau1" onChange={(e) => {
                    changing(e)
                  }} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập lại mật khẩu" />
                  <span className='text-red-600'>{state.errmatKhau1}</span>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Email
                    </div>


                  </div>
                  <input type="text" name="email" onChange={(e) => {
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
                  <input type="number" name="soDt" onChange={(e) => {
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
                  <input type="type" name="hoTen" onChange={(e) => {
                    changing(e)
                  }} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào họ tên" />
                  <span className='text-red-600'>{state.errhoTen}</span>
                </div>

                <div className="mt-9 ">
                  <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
          shadow-lg">
                    Đăng ký
                  </button>
                </div>

              </div>

              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                <NavLink to="/login" className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng Nhập</NavLink>
              </div>

            </div>
          </div>
        </form></div>

    </div>
  )
}

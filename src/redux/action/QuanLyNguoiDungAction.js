

import { useNavigate } from 'react-router-dom';
import { QuanLyNguoiDungService, quanLyNguoiDungService } from './../../services/QuanLyNguoiDungService';
import { DANG_NHAP_ACTION, GET_MA_LOAI_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG, THONG_TIN_CAN_CAP_NHAP } from './../types/QuanLyNguoiDungType';

import { createBrowserHistory } from "history";
import { displayLoadingAction, hideLoadingAction } from './LoadingActions';
import { LAY_TAT_CA_NGUOI_DUNG_ALL } from '../types/QuanLyAdMinType';




export const DangNhapAction = (thongTinDangNhap) => {
    const {id}=thongTinDangNhap;
   
  return async (dispatch) => {
       
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
                   

            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                });
                //Chuyển hướng đăng nhập về trang trước đó
                if(id===0){
                    window.location.href =`/`
                }else{
                    window.location.href =`/checkout/${id}`
                }
               
                
            }

            console.log('result', result);

        } catch (error) {
           
           
            console.log('error', error.response.data);
        }

    }

}
 




export const layThongTinNguoiDungAction = (thongTinDangNhap) => {



    return async (dispatch) => {
        dispatch(displayLoadingAction)
      
        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();
          
            console.log('result', result);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });

            }
            await dispatch(hideLoadingAction);

        } catch (error) {
            dispatch(hideLoadingAction)     
            console.log('error`13', error);
        }

    }

}


export const DangKyAction = (thongTinDangKy) => {
   
   
  return async (dispatch) => {
      
        try {
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
                   

            if (result.data.statusCode === 200) {
              alert("Đang ký thành công xin hãy đăng nhập lại tài khoản")
              window.location.href="/login"
            }
          

        } catch (error) {
           
            alert("Lỗi xử lý vui lòng nhập lại")
              window.location.href="/Register"
            console.log('error', error);
        }

    }

}

export const CapNhapThongTinAction = (thongTinCapNhap) => {
   
   
    return async (dispatch) => {
        dispatch(displayLoadingAction)
          try {
              const result = await quanLyNguoiDungService.capNhapThongtin(thongTinCapNhap);
                     
                
              if (result.data.statusCode === 200) {
                 alert("Cap nhap thong tin thanh cong") 
                 const result = await quanLyNguoiDungService.layThongTinNguoiDung();
          
                
                 if (result.data.statusCode === 200) {
                  await   dispatch({
                         type: SET_THONG_TIN_NGUOI_DUNG,
                         thongTinNguoiDung: result.data.content
                     });
     
                 }
              }
              await dispatch(hideLoadingAction);
  
          } catch (error) {
            await dispatch(hideLoadingAction);
           
              console.log('error', error);
          }
  
      }
  
  }

  export const LayThongTinNguoiDungAdminALL = (soTrang) => {
   
   
    return async (dispatch) => {
        dispatch(displayLoadingAction)
          try {
              const result = await quanLyNguoiDungService.layThongTinNguoiDungALL(soTrang);
                     
             
              if (result.data.statusCode === 200) { 
               dispatch({type:LAY_TAT_CA_NGUOI_DUNG_ALL,dataTimKiem:result.data.content})
                
              }
              await dispatch(hideLoadingAction);
  
          } catch (error) {
            await dispatch(hideLoadingAction);
           
              console.log('error', error);
          }
  
      }
  
  }

  export const TimKiemNguoiDungTheTuKhoa = (tuKhoa,soTrang) => {
   
   
    return async (dispatch) => {
        dispatch(displayLoadingAction)
          try {
              const result = await quanLyNguoiDungService.timKiemNguoTheoTuKhoa(tuKhoa,soTrang);
                     
             
              if (result.data.statusCode === 200) { 
               dispatch({type:LAY_TAT_CA_NGUOI_DUNG_ALL,dataTimKiem:result.data.content})
                
              }
              await dispatch(hideLoadingAction);
  
          } catch (error) {
            await dispatch(hideLoadingAction);
           
              console.log('error', error);
          }
  
      }
  
  }


  export const XoaNguoiDUng = (taiKhoan) => {
   
   
    return async (dispatch) => {
        dispatch(displayLoadingAction)
          try {
              const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
                     
             
              if (result.data.statusCode === 200) { 
              alert("Xoa nguoi dung thanh cong")
                window.location.reload();
              }
              await dispatch(hideLoadingAction);
  
          } catch (error) {
            await dispatch(hideLoadingAction);
            alert("Khong thanh cong vi " +error.response.data.content)
              console.log('error', error);
          }
  
      }
  
  }

  export const getMaLoai = () => {
   
   
    return async (dispatch) => {
        dispatch(displayLoadingAction)
          try {
              const result = await quanLyNguoiDungService.getMaLoai();
                     
             console.log('result', result)
              if (result.data.statusCode === 200) { 
                dispatch({type:GET_MA_LOAI_NGUOI_DUNG,data1:result.data.content})
              await dispatch(hideLoadingAction);
              }
          } catch (error) {
            await dispatch(hideLoadingAction);
            alert("Khong thanh cong vi " +error.response.data.content)
              console.log('error', error);
          }
  
      }
  
  }

  export const ThemNguoiDUngTuAdmin = (dataNguoiDung) => {
   
   
    return async (dispatch) => {
        dispatch(displayLoadingAction)
          try {
              const result = await quanLyNguoiDungService.themNguoiDung(dataNguoiDung);
                     
             console.log('result', result)
              if (result.data.statusCode === 200) { 

                alert("Them thanh cong ")
                await dispatch(hideLoadingAction);
                window.location.reload();
              
              }
          } catch (error) {
            await dispatch(hideLoadingAction);
            alert("Khong thanh cong vi " +error.response.data.content)
              console.log('error', error);
          }
  
      }
  
  }


  export const TimKiemNguoiDung = (tuKhoa) => {
   
   
    return async (dispatch) => {
        dispatch(displayLoadingAction)
          try {
              const result = await quanLyNguoiDungService.timKiemNguoDung(tuKhoa);
                     
             
              if (result.data.statusCode === 200) { 
                console.log(`result`,result)
                await   dispatch({
                    type: THONG_TIN_CAN_CAP_NHAP
                    ,dataCapNhap:result.data.content
                });
              
                
              }
              await dispatch(hideLoadingAction);
  
          } catch (error) {
            await dispatch(hideLoadingAction);
           
              console.log('error', error);
          }
  
      }
  
  }

  export const CapNhapNguoiDung = (data) => {
   
   
    return async (dispatch) => {
        dispatch(displayLoadingAction)
          try {
              const result = await quanLyNguoiDungService.capNhapThongTinNguoiDungAdmin(data);
              if (result.data.statusCode === 200) { 
                alert("Cap nhap thanh cong")
                console.log(`result`,result)
              
             setTimeout(()=>{
              dispatch(TimKiemNguoiDung(result.data.content.taiKhoan))   
             },3000)
              }
              await dispatch(hideLoadingAction);
  
          } catch (error) {
            await dispatch(hideLoadingAction);
           
              console.log('error', error);
          }
  
      }
  
  }
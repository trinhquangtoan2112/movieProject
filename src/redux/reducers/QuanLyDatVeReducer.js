import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe"
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeType"

const initialState = {
    chiTietPhongVe: new ThongTinLichChieu(),
    DanhSachGheDaDat:[
       
 

 
    ],
    activeTab:1,
    danhSachGheKhachDat:[  
     
    ],
}

export const QuanLyDatVeReducer= (state = initialState, action) => {
  switch (action.type) {

  case SET_CHI_TIET_PHONG_VE:
    state.chiTietPhongVe =action.chiTietPhongVe
    return { ...state }
   case DAT_VE:{
    
    let danhSachGheCapNhap =[...state.DanhSachGheDaDat];
    let index =danhSachGheCapNhap.findIndex(gheDD =>gheDD.maGhe ===action.gheDuocChon.maGhe);
    if(index !== -1) {
      danhSachGheCapNhap.splice(index, 1);
    }else{
      danhSachGheCapNhap.push(action.gheDuocChon);
    }
    return{...state,DanhSachGheDaDat:danhSachGheCapNhap }
   }
   case DAT_VE_HOAN_TAT:{
    state.DanhSachGheDaDat =[];
    return {...state}
   }
   case CHUYEN_TAB :{
    
     state.activeTab=action.data123;
   
     return {...state}
   }
  default:
    return state
  }
}

import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { LAY_TAT_CA_NGUOI_DUNG_ALL } from "../types/QuanLyAdMinType";
import { DANG_NHAP_ACTION, GET_MA_LOAI_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG, THONG_TIN_CAN_CAP_NHAP } from "../types/QuanLyNguoiDungType";


let user = {};
if(localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const stateDefault = {
    userLogin: user,
    thongTinNguoiDung: {},
    thongTinCanCapNhap:{},
    content:{} ,
    maLoaiNguoiDung:[]
}


export const QuanLyNguoiDungReducer = (state = stateDefault,action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION : {
        const {thongTinDangNhap} = action;
        localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
        localStorage.setItem(TOKEN,thongTinDangNhap.accessToken);
        return {...state,userLogin:thongTinDangNhap}
    }

    case SET_THONG_TIN_NGUOI_DUNG :{ 
        state.thongTinNguoiDung = action.thongTinNguoiDung;
        return {...state};
    }
    case LAY_TAT_CA_NGUOI_DUNG_ALL:{
      state.content =action.dataTimKiem;
     
      return {...state};
    }
    case GET_MA_LOAI_NGUOI_DUNG:{
      state.maLoaiNguoiDung =action.data1;
      return {...state}
    }
    case THONG_TIN_CAN_CAP_NHAP:{
   
      state.thongTinCanCapNhap =action.dataCapNhap[0];
      return {...state}
    }
  default:
    return state
  }
}

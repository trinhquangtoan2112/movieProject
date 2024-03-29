import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from './../types/QuanLyDatVeType';
import { ThongTinDatVe } from './../../_core/models/ThongTinDatVe';
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
import { connection } from "../..";






export const layChiTietPhongVeAction = (maLichChieu) => {


    return async dispatch => {


        try {

            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

            // console.log('result',result);
            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
               
            }


        } catch (error) {

            console.log('error', error);
            console.log('error', error.response?.data);
        }
    }
}


export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {


    return async (dispatch,getState) => {
        try {

            dispatch(displayLoadingAction)


            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            console.log("result",result);
            //Đặt vé thành công gọi api load lại phòng vé
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({type:DAT_VE_HOAN_TAT})
            await dispatch(hideLoadingAction);

            // let userLogin = getState().QuanLyNguoiDungReducer.userLogin;
            //  connection.invoke('datGheThanhCong',userLogin.taiKhoan,thongTinDatVe.maLichChieu);

            dispatch({type:CHUYEN_TAB,data123:2 });


        } catch (error) {
            dispatch(hideLoadingAction)
            console.log(error);
        }   
    }

}



export const datGheAction = (ghe,maLichChieu) => {
   
   
    return async (dispatch,getState) => {

        //Đưa thông tin ghế lên reducer
        await dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
        });

        //Call api về backend   
        let danhSachGheDangDat = getState().QuanLyDatVeReducer.DanhSachGheDaDat;
        let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;

        console.log('danhSachGheDangDat',danhSachGheDangDat);
        console.log('taiKhoan',taiKhoan);
        console.log('maLichChieu',maLichChieu);
        //Biến mảng thành chuỗi
        let danhSachGheDangDat1 = JSON.stringify(danhSachGheDangDat);
        console.log('danhSachGheDangDat1',danhSachGheDangDat1);
        //Call api signalR
        connection.invoke('datGhe',taiKhoan,danhSachGheDangDat1,maLichChieu);




    }

}
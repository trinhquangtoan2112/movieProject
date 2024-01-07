import { quanLyRapService } from "../../services/QuanLyRapService";

import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from './../types/QuanLyRapType';


export const layDanhSachHeThongRapAction =()=>{
    return async (dispatch) =>{
        try {
            
            const result = await quanLyRapService.layDanhSachHeThongRap();
        
            if(result.status ===200){
                dispatch({
                    type:SET_HE_THONG_RAP_CHIEU,
                    heTHongRapChieu:result.data.content
                })
            }
        } catch (error) {
             console.log("errior",error)
        }
    }
}

export const layThongTinChiTietPhim = (id) => {
    return async dispatch => {
        try{
            const result = await quanLyRapService.layThongTinLichChieuPhim(id);

          
            //Lấy được dữ liệu từ api về  => reducer

            dispatch({
                type:SET_CHI_TIET_PHIM,
                filmDetail: result.data.content
            })
          

        }
        catch(errors) {
            console.log('errors',errors.response?.data)

        }
    }


}
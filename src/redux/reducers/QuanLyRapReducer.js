import { SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType"

const rapReducer = {
    heThongRapChieu:[
        {
            "maHeThongRap": "BHDStar",
            "tenHeThongRap": "BHD Star Cineplex",
            "biDanh": "bhd-star-cineplex",
            "logo": "http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png"
          },
          {
            "maHeThongRap": "CGV",
            "tenHeThongRap": "cgv",
            "biDanh": "cgv",
            "logo": "http://movieapi.cyberlearn.vn/hinhanh/cgv.png"
          },
    ]
}

export const  QuanLyRapReducer= (state = rapReducer, action) => {
  switch (action.type) {

  case SET_HE_THONG_RAP_CHIEU:
    state.heThongRapChieu =action.heTHongRapChieu;
    
    return { ...state }

  default:
    return state
  }
}

import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, SET_THONG_TIN_PHIM } from "../types/QuanLyPhimTypes"
import { SET_CHI_TIET_PHIM } from "../types/QuanLyRapType";

const initialState = {
  arrFilm:[],
  dangChieu: true,
  sapChieu:true,
  arrFilmDefault: [],
  filmDetail:{
    heThongRapChieu:["122412412"]
},

  thongTinPhim:{}
}

export const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {

  case SET_DANH_SACH_PHIM:
    {
      state.arrFilm =action.arrFilm;
      state.arrFilmDefault =action.arrFilm;
      return { ...state }
    }
  
    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;

      state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu );
      return {...state}
  }
  case SET_FILM_SAP_CHIEU : {
      state.sapChieu = !state.sapChieu;

      state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu );
      return {...state}
  }
 case SET_CHI_TIET_PHIM:{
  state.filmDetail =action.filmDetail;
  console.log("action.filmDetai",state)
  return {...state}
 }
 case SET_THONG_TIN_PHIM:{
  state.thongTinPhim =action.thongTinPhim;
  return {...state}
 }
  default:
    return state
  }
}

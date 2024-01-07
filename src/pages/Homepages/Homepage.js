import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MultipleRowSlick from '../../compoment/Layouts/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/action/QuanLyPhimActions';
import { layDanhSachHeThongRapAction } from '../../redux/action/QuanLyRapAction';

export default function Homepage(props) {
    const {props1}=props;
     
    const {HomeCarousel,HomeMenu}=props1;
    const dispatch = useDispatch();
     useEffect(()=>{
      const action =layDanhSachPhimAction();
      dispatch(action);
      dispatch(layDanhSachHeThongRapAction());
     },[]);
   const arrFilm =useSelector(state =>state.QuanLyPhimReducer.arrFilm) ;
   const {heThongRapChieu} =useSelector(state =>state.QuanLyRapReducer);
 
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto container1" >

                    <MultipleRowSlick arrFilm={arrFilm}/>
                    {/* <div className="flex flex-wrap  " style={{ justifyContent: 'center' }}>
                        {renderFilms()}
                    </div> */}
                </div>
            </section>
            <div className="mx-36">
            <HomeMenu heTHongRapChieu={heThongRapChieu}></HomeMenu>
            </div>
     
     
  


    </div>
  )
}

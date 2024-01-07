import  axios  from 'axios';
import { GETDATACAROUSEL } from '../types/CarouselTypes';
import { DOMAIN } from '../../util/settings/config';
import { quanLyPhimService } from '../../services/QuanLyPhimService';

export const getCarouselAction =(dispatch)=>{
   return async ()=>{

     try {
        const result =  await quanLyPhimService.layDanhSachBanner(); 
        dispatch({
          type:GETDATACAROUSEL,
          data:result.data.content

        })
     }  catch (error) {
        console.log("error",error);
     }
    }
}
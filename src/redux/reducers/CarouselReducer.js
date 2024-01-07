import { GETDATACAROUSEL } from "../types/CarouselTypes"

const initialState ={
    data:[
   
]
}
export const CarouselReducer= (state = initialState, action) => {
  switch (action.type) {

  case GETDATACAROUSEL:
  
   state.data =action.data;
    return {...state}

  default:
    return {...state}
  }
}

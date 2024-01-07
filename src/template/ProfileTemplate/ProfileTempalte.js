
import React from 'react'
import { useEffect } from 'react';

export const ProfileTempalte =(props)=>{

    const {props1}  =props;
   
    const {Homepage,HomeCarousel,Header,Footer} =props1;
    useEffect(()=>{
        window.scrollTo(0,0);
 })
     return <div>
       <Header></Header>
       <HomeCarousel></HomeCarousel>
       <Homepage></Homepage>
    <Footer></Footer>
        </div>
 
}
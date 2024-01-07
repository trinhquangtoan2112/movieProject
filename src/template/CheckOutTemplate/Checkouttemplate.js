import React from 'react'
import { USER_LOGIN } from '../../util/settings/config';
import { useActionData, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

 const Checkouttemplate =(props)=>{

    const {props1}  =props;
    const nav =useNavigate();
    const { id } = useParams();
    const {Homepage,Header,Footer,...otherProp} =props1;
    useEffect(()=>{
   
        if(!localStorage.getItem(USER_LOGIN)){
            
           return nav("/login",{ state: { key: id} })
        }
    },[])
    useEffect(()=>{
      window.scrollTo(0,0);
})
     return <div>
        {/* <Header></Header> */}
    <  Homepage props1={otherProp}></Homepage>
     <Footer></Footer>
        </div>
 
}

export default Checkouttemplate;
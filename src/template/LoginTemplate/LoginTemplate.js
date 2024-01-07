
import React from 'react'

export const LoginTemplate =(props)=>{

    const {props1}  =props;
   
    const {Homepage,Header,Footer,...otherProp} =props1;
 
     return <div>
     
      
       <Homepage props1={otherProp}>2141241</Homepage>
    
        </div>
 
}
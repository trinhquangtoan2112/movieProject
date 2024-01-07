

import React from 'react'

export const RegisterTemplate =(props)=>{

    const {props1}  =props;
    const {Header,Footer}=props1;
    const {Homepage,...otherProp} =props1;
    console.log("12222",props)
     return <div>
        <Header></Header>
      
     <Footer></Footer>
        </div>
 
}
import { useEffect } from "react";




export const HomeTemplate =(props)=>{

    const {props1}  =props;
 
    const {Homepage,Header,Footer,...otherProp} =props1;
      useEffect(()=>{
             window.scrollTo(0,0);
      },[])
     return <div>
        <Header></Header>
        <Homepage props1={otherProp}>
       
     </Homepage>
     <Footer></Footer>
        </div>
 
}
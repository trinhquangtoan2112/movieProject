
import React, { Fragment, useState } from 'react';
import {  Tabs  } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
 
  
  // submenu keys of first level
 
export default function HomeMenu(props) {
  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  
 const heTHongRapChieu=props.heTHongRapChieu;
 const renderDanhSachPhimCumRap =(cumRap)=>{
 
  return cumRap.danhSachPhim.slice(0, 3).map((phim, index) => {
    return  <Fragment key={index}>
    <div className="my-5" >
        <div style={{ display: 'flex' }}>
            <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />
  
            <div className="ml-2">
                <h1 className="text-2xl text-green-700" >{phim.tenPhim}</h1>
                <p>{cumRap.diaChi}</p>
                <div className="grid grid-cols-6 gap-6">
                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                        return <NavLink className="text-xl text-green-400" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                        </NavLink>
                    })}
                </div>
            </div>
  
  
        </div>
  
    </div>
    <hr />
  </Fragment>
   })
 };
const renderCumRap =(heTHongRapChieu)=>{
 
   const { lstCumRap} =heTHongRapChieu;
   const cumRap =lstCumRap

        if(cumRap ==null){
          return null;
        }
        else{
          return   <Tabs
          tabPosition={tabPosition}
          items={new Array(cumRap.length).fill(cumRap).map((cumRap, i) => {
            return {
              label:  <div style={{ width: '300px', display: 'flex' }} >
              <img src={cumRap[i].hinhAnh} width="50" alt={cumRap[i].maCumRap} /> <br />
              <div className="text-left ml-2">
                  {cumRap[i].tenCumRap}
                  <p className="text-red-200">Chi tiết</p>
              </div>
          </div>,
              key: i,
              children:renderDanhSachPhimCumRap(cumRap[i]),
            };
          })}
        />
        }
  
      {/* <div style={{ width: '300px', display: 'flex',margin:"20px" }} key={index}>
    <img src={cumRap.hinhAnh} width="50" alt={cumRap.maCumRap} /> <br />
    <div className="text-left ml-2">
        {cumRap.tenCumRap}
        <p className="text-red-200">Chi tiết</p>
    </div>
</div> */}

   

  
}
  return (
    <>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(heTHongRapChieu.length).fill(heTHongRapChieu).map((heTHongRapChieu, i) => {
          return {
            label: <img src={heTHongRapChieu[i].logo} className="rounded-full" width="50" alt="12124" />,
            key: i,
            children: <div className='scrool_sub'>{renderCumRap(heTHongRapChieu[i])}</div>,
          };
        })}
      />
    </>
  );
};
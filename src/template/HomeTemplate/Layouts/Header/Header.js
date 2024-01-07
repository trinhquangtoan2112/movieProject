import { Select } from 'antd';
import React, { Fragment } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config';
import { useTranslation } from 'react-i18next';
const { Option } = Select;
export default function Header(props) {
    const { userLogin  } = useSelector(state => state.QuanLyNguoiDungReducer);
    const nav =useNavigate();
   

    const { t, i18n } = useTranslation();


    const handleChange = (value) => {
        i18n.changeLanguage(value)
    }

    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <button onClick={() => {
                    nav('/login')
                }} className="self-center px-2 py-2 rounded">{t('signin')}</button>
                <button onClick={() => {
                    nav('/register')
                }} className="self-center px-2 py-2 font-semibold rounded  mr-3">{t('signup')}</button>

            </Fragment>
        }


        return <Fragment> <button onClick={() => {
            nav('/profile')
        }} className="self-center px-8 py-3 rounded">{t('hello')} {userLogin.taiKhoan}</button>
            <button onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                nav('/');
                window.location.reload();
            }} className="text-yellow-500 mr-5">{t('logoff')}</button>
        </Fragment>
    }
  return (
    <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-10" >
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="cyberlearn.vn" />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                    <NavLink  className={({ isActive, isPending }) =>
                            isPending ? "pending nav-link" : isActive ? "active flex items-center -mb-0.5  px-4 text-violet-600   border-b-2 border-white" : "flex items-center -mb-0.5 border-b-2 px-4 border-transparent  border-violet-600 text-white"
                        } to="/">Home</NavLink>
                      
                    </li>
                    <li className="flex">
                    <NavLink  className={({ isActive, isPending }) =>
                            isPending ? "pending nav-link" : isActive ? "active flex items-center -mb-0.5  px-4 text-violet-600   border-b-2 border-white" : "flex items-center -mb-0.5 border-b-2 px-4 border-transparent  border-violet-600 text-white"
                        } to="/contact">Contact</NavLink>
                      
                    </li>
                    <li className="flex">
                    <NavLink  className={({ isActive, isPending }) =>
                            isPending ? "pending nav-link" : isActive ? "active flex items-center -mb-0.5  px-4 text-violet-600   border-b-2 border-white" : "flex items-center -mb-0.5 border-b-2 px-4 border-transparent  border-violet-600 text-white"
                        } to="/news">News</NavLink>
                     
                    </li>

                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">

                    {renderLogin()}




                    <Select defaultValue="en" style={{ width: 100 }} 
                     onChange={handleChange}
                    >
                        <Option value="en">Eng</Option>
                        <Option value="chi">Chi</Option>

                        <Option value="vi">Vi</Option>
                    </Select>

                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>


               {/* {t('hello.2')}  */}
            </div>
        </header>

  )
}

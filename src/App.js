
import './App.css';
import { Route, Routes, } from "react-router-dom";

import Homepage from './pages/Homepages/Homepage';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate';
import Header from './template/HomeTemplate/Layouts/Header/Header';
import Footer from './template/HomeTemplate/Layouts/Footer/Footer';
import HomeCarousel from './template/HomeTemplate/Layouts/HomeCarousel/HomeCarousel';
import Contactpage from './pages/Contactpages/Contactpage';
import NewPages from './pages/NewPages/NewPages';
import { Contacttemplate } from './template/ContactTemplate/Contacttemplate';
import { NewTemplate } from './template/NewsTemplate/NewTemplate';

import { UserTemplates } from './template/UserTemplates/UserTemplates';
import HomeMenu from './pages/Homepages/HomeMenu/HomeMenu';
import DetailPages from './pages/DetailPages/DetailPages';
import { DetailTemplate } from './template/DetailTemplate/DetailTemplate';
import CheckOutPages from './pages/CheckOutPages/CheckOutPages';
import { Suspense, lazy } from "react"
import Checkouttemplate from './template/CheckOutTemplate/Checkouttemplate';
import { LoginTemplate } from './template/LoginTemplate/LoginTemplate';
import LoginPages from './pages/LoginPages/LoginPages';
import Loading from './compoment/Layouts/Loading/Loading';
import { ProfileTempalte } from './template/ProfileTemplate/ProfileTempalte';
import Profilepages from './pages/Profilepages/Profilepages';
import AdminTemplate from './template/AdminTemplate/AdminTemplate';
import Dashboard from './pages/AdminPages/Dashboard/Dashboard';
import Films from './pages/AdminPages/Films/Films';
import AddNew from './pages/AdminPages/Films/AddNew/AddNew';
import Edit from './pages/AdminPages/Films/Edit/Edit';
import ShowTime from './pages/AdminPages/Showtime/Showtime';
import RegisterPages from './pages/RegisterPages.js/RegisterPages';
import UserAdmin from './pages/AdminPages/UserAdmin/UserAdmin';
import AddUser from './pages/AdminPages/UserAdmin/AddUser/AddUser';
import EditUser from './pages/AdminPages/UserAdmin/EditUser/EditUser';

const CheckouttemplateLazy = lazy(() => import('./template/CheckOutTemplate/Checkouttemplate'));



function App() {


  return (
    <>
      <Loading></Loading>
      <Routes >

        <Route path='/' element={<HomeTemplate props1={{ Homepage, Header, Footer, HomeCarousel, HomeMenu }}></HomeTemplate>}></Route>
        <Route path='/home' element={<HomeTemplate props1={{ Homepage, Header, Footer, HomeCarousel, HomeMenu }}></HomeTemplate>}></Route>
        <Route path='/contact' element={<NewTemplate props1={{ Homepage: Contactpage, Header, Footer, HomeCarousel }}></NewTemplate>}></Route>
        <Route path='/news' element={<Contacttemplate props1={{ Homepage: NewPages, Header, Footer, HomeCarousel }}></Contacttemplate>}></Route>
        <Route path='/Register' element={<UserTemplates props1={{ Homepage: RegisterPages, Header, Footer, HomeCarousel }}></UserTemplates>}></Route>
        <Route path='/detail/:id' element={<DetailTemplate props1={{ Homepage: DetailPages, Header, Footer, HomeCarousel }}></DetailTemplate>}></Route>
        <Route path='/login' element={<LoginTemplate props1={{ Homepage: LoginPages, Header, Footer, HomeCarousel }}></LoginTemplate>}></Route>
        <Route path='/profile' element={<ProfileTempalte props1={{ Homepage: Profilepages, Header, Footer, HomeCarousel }}></ProfileTempalte>}></Route>
        <Route path='/admin' element={<AdminTemplate props1={{ Homepage: UserAdmin, Header, Footer }}></AdminTemplate>}></Route>
        <Route path='/admin/films/addnew' element={<AdminTemplate props1={{ Homepage: AddNew, }}></AdminTemplate>}></Route>
        <Route path='/admin/films' element={<AdminTemplate props1={{ Homepage: Films }}></AdminTemplate>}></Route>
        <Route path='/admin/films/edit/:id' element={<AdminTemplate props1={{ Homepage: Edit,  }}></AdminTemplate>}></Route>
        <Route path='/admin/films/showtime/:id/:tenphim' element={<AdminTemplate props1={{ Homepage: ShowTime,  }}></AdminTemplate>}></Route>
        <Route path='/checkout/:id' element={<Suspense fallback={<h1>...Loading</h1>}><CheckouttemplateLazy props1={{ Homepage: CheckOutPages, Header, Footer, HomeCarousel }}></CheckouttemplateLazy> </Suspense>}></Route>
        <Route path='/admin/showtimes' element={<AdminTemplate props1={{ Homepage: ShowTime,  }}></AdminTemplate>}></Route>
        <Route path='/admin/users' element={<AdminTemplate props1={{ Homepage: UserAdmin,  }}></AdminTemplate>}></Route>
        <Route path='/admin/AddUser' element={<AdminTemplate props1={{ Homepage: AddUser,  }}></AdminTemplate>}></Route>
        <Route path='/admin/Edit' element={<AdminTemplate props1={{ Homepage: EditUser,  }}></AdminTemplate>}></Route>


      </Routes>
    </>
  );
}

export default App;

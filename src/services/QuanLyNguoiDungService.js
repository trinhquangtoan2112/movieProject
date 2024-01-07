import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyNguoiDungService  extends baseService{

    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }
    layThongTinNguoiDung = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }
    dangKy =(thongTinDangKy)=>{
        return this.post('/api/QuanLyNguoiDung/DangKy',thongTinDangKy);
    }
    capNhapThongtin =(thongTinCapNhap)=>{
        return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,thongTinCapNhap);
    }
    layThongTinNguoiDungALL =(soTrang)=>{
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${soTrang}&soPhanTuTrenTrang=20`)
    }
    layThongTinNguoiDungTheoTuKhoa =(tuKhoa,soTrang)=>{
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${tuKhoa}&soTrang=${soTrang}&soPhanTuTrenTrang=20`)
    }
    timKiemNguoTheoTuKhoa =(tuKhoa,soTrang)=>{
        return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${tuKhoa}&soTrang=${soTrang}&soPhanTuTrenTrang=20`)
    }
    timKiemNguoDung =(tuKhoa)=>{
        return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`)
    }
    xoaNguoiDung =(taiKhoan)=>{
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }
    getMaLoai =()=>{
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
    }
    themNguoiDung =(dataNguoiDung)=>{
         return  this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,dataNguoiDung)
    }
    capNhapThongTinNguoiDungAdmin =(dataCapNhap)=>{
        return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,dataCapNhap)
    }
}



export const quanLyNguoiDungService = new QuanLyNguoiDungService();
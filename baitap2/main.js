var dsnv = new DanhSachSinhVien();
var validation = new Validation();

getLocalStorge();

function getEle(id) {
    return document.getElementById(id)
}

function layThongTinSV() {

    //DOM tới các thẻ input lấy value
    var _maSV = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _email = getEle("txtEmail").value;
    var _pass = getEle("txtPass").value;
    var _ngaySinh = getEle("txtNgaySinh").value;
    var _khoaHoc = getEle("khSV").value;
    var _diemToan = getEle("txtDiemToan").value;
    var _diemLy = getEle("txtDiemLy").value;
    var _diemHoa = getEle("txtDiemHoa").value;
    //flag (cờ) - isvalid là true hop lệ false không hợp lệ
    var isValid = true;
    //Check validation
    //MaSV
    isValid = validation.kiemTraRong(_maSV, "errorMaSV", "(*)Vui lòng nhập mã sinh vien");
    isValid = validation.kiemTraRong(_tenSV, "errortenSV", "(*)Vui lòng nhập mã sinh vien");
    isValid = validation.kiemTraRong(_email, "erroremail", "(*)Vui lòng nhập mã sinh vien");
    isValid = validation.kiemTraRong(_matkhau, "errormatkhau", "(*)Vui lòng nhập mã sinh vien");
    isValid = validation.kiemTraRong(_diemToan, "errortoan", "(*)Vui lòng nhập mã sinh vien");
    isValid = validation.kiemTraRong(_diemLy, "errorly", "(*)Vui lòng nhập mã sinh vien");
    isValid = validation.kiemTraRong(_diemHoa, "errorhoa", "(*)Vui lòng nhập mã sinh vien");

    //check validation
    //Them MaSV
    if (isAdd) {
        isValid &=
            Validate.kiemTraRong(
                _maSV,
                "errorMaSV",
                "(*) Vui long them ma sinh vien") &&
            validation.kiemTraDoDaiKyTu(
                _maSV,
                "errorMaSV",
                4,
                8,
                "(*)Vui long nhap tu 4 - 8 ky tu") &&
            validation.kiemTraMaSVTonTai(
                _maSV,
                "errorMaSV",
                "(*) Ma sinh vien da on tai",
                dssv.arr
            );

        //Ten SV
        isValid &= Validate.kiemTraRong(
                _tenSV,
                "errortenSV",
                "(*) Vui long them ten sinh vien") &&
            validation.kiemTraDoDaiKyTu(
                _tenSV,
                "errortenSV",
                "(*)Vui long nhap tu 4 - 8 ky tu");
        //Them email
        isValid &= Validate.kiemTraRong(
            _email,
            "erroremail",
            "(*) Vui long dien email");
        //Them mat khau
        isValid &= Validate.kiemTraRong(
            _matkhau,
            "errormatkhau",
            "(*) Vui long dien mat sinh vien");

        //Them khoa hoc
        isValid &= Validate.kiemTraRong(
            "khSV",
            "errorKH",
            "(*) Vui long chon KH"
        );
        //Them diem toan
        isValid &= Validate.kiemTraRong(
            _diemToan,
            "errortoan",
            "(*) Vui long diem diem toan sinh vien");
        //Them diem ly
        isValid &= Validate.kiemTraRong(
            _diemLy,
            "errorly",
            "(*) Vui long dien diem ly sinh vien");
        //Them diem toan
        isValid &= Validate.kiemTraRong(
            _diemHoa,
            "errorhoa",
            "(*) Vui long dien diem hoa sinh vien");

        isValid &= alidate.kiemTraKhoaHoc(
            "khSV",
            "errorKH",
            "(*) Vui long chon khoa hoc"
        );
    }



    // if (_maSV === "") {
    //     getEle("errorMaSV").innerHTML = "(*) Vui lòng nhập mã sinh viên";
    //     getEle("errorMaSV").style.display = "block";
    //     isValid = false;
    // } else {
    //     getEle("errorMaSV").innerHTML = "";
    //     getEle("errorMaSV").style.display = "none";
    //     isValid = true;
    // }

    // if (_tenSV === "") {
    //     getEle("errorTenSV").innerHTML = "(*) Vui lòng nhập mã sinh viên";
    //     getEle("errorTenSV").style.display = "block";
    //     isValid = false;
    // } else {
    //     getEle("errorTenSV").innerHTML = "";
    //     getEle("errorTenSV").style.display = "none";
    //     isValid = true;
    // }


    //Check isValid
    if (!isValid) return;

    //Tao doi tuong sinhVien tu lop doi tuong SinhVien
    var sinhVien = new SinhVien(
        _maSV,
        _tenSV,
        _email,
        _pass,
        _ngaySinh,
        _khoaHoc,
        _diemToan,
        _diemLy,
        _diemHoa
    );

    //Tinh DTB

    sinhVien.tinhDTB();

    return sinhVien;
}

//Them sinh vien

getEle("btnThemSV").onclick = function() {
    var sinhVien = layThongTinSV();
    //them SV
    if (sinhVien) {
        dssv.themSV(sinhVien);
        taoBang(dssv.arr);
        setLocalStorage();
    }

};

// function taoBang(data) {
//     var content = "";
//     data.forEach(function(item) {
//         content += "<tr>";
//         content += "<td>" + item.maSV + "</td>";
//         content += "<td>" + item.tenSV + "</td>";
//         content += "<td>" + item.email + "</td>";
//         content += "<td>" + item.ngaySinh + "</td>";
//         content += "<td>" + item.khoaHoc + "</td>";
//         content += "<td>" + item.DiemTB + "</td>";
//         content += "</tr>";
//     });
//     getEle("tbodySinhVien").innerHTML = content;
// }

function taoBang(data) {
    var content = "";
    data.forEach(function(item) {
        content += `
          <tr>
              <td>${item.maSV}</td>
              <td>${item.tenSV}</td>
              <td>${item.email}</td>
              <td>${item.ngaySinh}</td>
              <td>${item.khoaHoc}</td>
              <td>${item.diemTB}</td>
              <td>
                <button class = "btn btn-info" onclick="suaSV('${item.maSV}')">Sửa</button>
                <button class = "btn btn-danger" onclick ="xoaSV('${item.maSV}')">Xóa</button>
              </td>
          </tr>
      `;
    });
    getEle("tbodySinhVien").innerHTML = content;
}

function xoaSV(id) {
    dssv.xoaSV(id);
    taoBang(dssv.arr);
    setLocalStorage();
}

function suaSV(id) {
    var sv = dssv.suaSV(id);
    if (sv) {
        //Dom toi cac the input show value
        getEle("txtMaSV").value = sv.maSV;
        getEle("txtTenSV").value = sv.tenSV;
        getEle("txtEmail").value = sv.email;
        getEle("txtPass").value = sv.pass;
        getEle("txtNgaySinh").value = sv.ngaySinh;
        getEle("khSV").value = sv.khoaHoc;
        getEle("txtDiemToan").value = sv.diemToan;
        getEle("txtDiemLy").value = sv.diemLy;
        getEle("txtDiemHoa").value = sv.diemHoa;

        //Hien thi lai buttin "Cap nhat"
        getEle("btnCapNhat").style.display = "inline-block";
        //disable input#txtMaSV
        getEle("txtMaSV").disabled = true;
    }
}

//Cap nhat SV

getEle("btnCapNhat").onclick = function() {
    var sinhVien = layThongTinSV(false);
    dssv.capNhatSV(sinhVien);
    taoBang(dssv.arr);
    setLocalStorage();
};

//Tìm kiếm SV
getEle("keyword").addEventListener("keyup", function() {
    var keyword = getEle("keyword").value;
    var mangTimKiem = dssv.timKiemSV(keyword);
    taoBang(mangTimKiem);
});


function setLocalStorage() {
    //Convert from JSON to string
    var dataString = JSON.stringify(dssv.arr);
    //Luu xuong localStorage
    localStorage.setItem("DSSV", dataString);
}

function getLocalStorge() {
    if (localStorage.getItem("DSSV")) {
        var dataString = localStorage.getItem("DSSV");
        //Convert from String to JSON
        var dataJson = JSON.parse(dataString);
        dssv.arr = dataJson;
        taoBang(dssv.arr);
    }
}
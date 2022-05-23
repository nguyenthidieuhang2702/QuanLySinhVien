function getEle(id) {
    return document.getElementById(id)
}

//Click button "Hiển thi thông tin"
function hienThiThongTin() {
    /*
    Dom tới các thẻ input lấy value
    */
    var maSV = getEle("txtMaSV").value;
    var tenSV = getEle("txtTenSV").value;
    var loaiSV = getEle("loaiSV").value;
    var diemToan = getEle("txtDiemToan").value;
    var diemVan = getEle("txtDiemVan").value;

    var dtb = tinhDTB(diemToan, diemVan);
    var loai = xepLoai(dtb);

    getEle("spanTenSV").innerHTML = tenSV;
    getEle("spanMaSV").innerHTML = maSV;
    getEle("spanLoaiSV").innerHTML = loaiSV;
    getEle("spanDTB").innerHTML = dtb;
    getEle("spanXepLoai").innerHTML = loai;
}

/*
Viết hàm tính ĐTB
*/
function tinhDTB(toan, van) {
    return (parseFloat(toan) + parseFloat(van)) / 2;
}


/* Viết hàm xếp loại */
function xepLoai(dtb) {
    if (8 <= dtb && dtb <= 10) {
        return "Gioi";
    } else if (7 <= dtb && dtb < 8) {
        return "Kha";
    } else if (6 <= dtb && dtb < 7) {
        return "Trung binh";
    } else {
        return "Yếu";
    }
}
function Validation() {
    this.kiemTraRong = function(value, errorId, mess) {
        if (value === "") {
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        } else {
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
    };
    this.kiemTraKhoaHoc = function(select, errorId, mess) {
        if (getEle("selectId").selectIndex != 0) {
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.dis = "none";
            return true;
        }
        getEle("selectId").selectIndex = mess;
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.dis = "none";
        return false;

    };
    this.kiemTraDoDaiKyTu - function(value, errorId, mess) {
        if (value = 1) {
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.dis = "none";
            return true;
        }
        getEle("selectId").selectIndex = mess;
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.dis = "block";
        return false;

    }
    this.kiemChuoiKyTu = function(value, errorId, mess) {
        var letter = "^[A-Za-z]+$";
        if (value.match(letter)) {
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.dis = "none";
            return true;
        }
        getEle("selectId").selectIndex = mess;
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.dis = "block";
        return false;

    }
    this.kiemChuoiKyTu = function(value, errorId, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

        if (value.match(letter)) {
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.dis = "none";
            return true;
        }
        getEle("selectId").selectIndex = mess;
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.dis = "block";
        return false;

    }
    this.kiemTraMaSVTonTai = function(value, errorId, mess, arr) {
        var isStatus = true;

        arr.forEach(function(item) {
            if (item.maSV === value) {
                //MaSV ton tai
                isStatus = false;
            }
        });
        if (isStatus) {
            //true
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.dis = "none";
            return true;
        }
        getEle("selectId").selectIndex = mess;
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.dis = "block";
        return false;

    }
}
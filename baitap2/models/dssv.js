function DanhSachSinhVien() {
    this.arr = [];

    this.themSV = function(sv) {
        this.arr.push(sv);
    };
    this.timViTriSV = function(maSV) {
        // TÌM VỊ TRÍ 
        // 0. tạo biến index = -1
        // 1. Duyệt mảng arr
        // 2. Nếu maSV === obiect.maSV
        // => Cập nhật lại giá trị 1 cho biến index
        var index = -1;
        this.arr.forEach(function(item, i) {
            if (item.maSV === maSV) {
                index = i;
            }
        });
        return index;
    }
    this.xoaSV = function(maSV) {
        var index = this.timViTriSV(maSV);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };
    this.suaSV = function(maSV) {
        var index = this.timViTriSV(maSV);
        if (index !== -1) {
            return this.arr[index];
        }
        return null;
    };

    this.capNhatSV = function(sv) {
        var index = this.timViTriSV(sv.maSV);
        if (index !== -1) {
            this.ar[index] = sv;
        }
    };
    this.timKiemSV = function(keyword) {
        //0. Tao mang TimKiem
        //1. Duyet mang arr
        //2. Neu item.tenSV trung voi keyword
        //=> them sv dc tim thay mangTimKiem
        //3. tra ve mangTimKiem
        var mangTimKiem = [];
        this.arr.forEach(function(item) {
            if (item.tenSV.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                mangTimKiem.push(item);
            }
        });
        return mangTimKiem;
    };

}
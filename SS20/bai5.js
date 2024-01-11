let diemLy = +prompt("Nhập điểm môn Vật lý:");
let diemHoa = +prompt("Nhập điểm môn Hóa học:");
let diemSinh = +prompt("Nhập điểm môn Sinh học:");


let tongDiem = diemLy + diemHoa + diemSinh;
let diemTrungBinh = tongDiem / 3;

console.log("Tổng Điểm",tongDiem);
console.log("Điểm Trung Bình",diemTrungBinh);
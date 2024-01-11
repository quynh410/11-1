let a = 5;
let b= "5";

console.log(a==b);  console.log(a===b);
console.log(a!=b);  console.log(a!==b);


// Toán tử == thực hiện các chuyển đổi loại cần thiết trước khi so sánh.
// toán tử === sẽ không thực hiện chuyển đổi loại. Do đó nếu hai giá trị không cùng loại, thì khi so sánh, kết quả sẽ trả về false.
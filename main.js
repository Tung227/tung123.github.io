function login() {
    var username = document.getElementById("Tung").value;
    var password = document.getElementById("123").value;

    // Thực hiện xử lý đăng nhập ở đây (kiểm tra username và password)
    // Ví dụ: Kiểm tra nếu username là "admin" và password là "password"

    if (username === "Tung" && password === "123") {
        // Lưu trạng thái đăng nhập vào Local Storage
        localStorage.setItem("loggedIn", "true");

        // Chuyển hướng đến trang web chính của bạn
        window.location.href = "Tùng Podkings";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}



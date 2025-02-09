function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "19092023") { // ตั้งรหัสตรงนี้
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
        document.getElementById("page2").classList.add("show");
    } else {
        alert("รหัสผิดนะ ลองอีกที! ❌");
    }
}

// ฟังก์ชันในการหยุดและเริ่มเล่น GIF
function toggleGif(position) {
    const gif = document.querySelector(`.${position} .gif`);
    
    // รีเซ็ตการแอนิเมชันของ GIF
    gif.style.animation = 'none'; // หยุดแอนิเมชันชั่วคราว
    gif.offsetHeight; // ใช้ trigger เพื่อให้แอนิเมชันทำงานใหม่
    gif.style.animation = ''; // เริ่มแอนิเมชันใหม่
}

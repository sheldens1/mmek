document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah submit form

    // Ambil nilai input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Validasi sederhana
    if (username === "luckyf" && password === "rainycantikfurina967") {
        alert("Login berhasil!");
        errorMessage.style.display = "none";
    } else {
        errorMessage.textContent = "Username atau password salah!";
        errorMessage.style.display = "block";
    }
});
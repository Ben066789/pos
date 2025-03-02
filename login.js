function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "backend/login.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    if (response.role === 'admin') {
                        window.location.href = "admin.hta";
                    } else {
                        window.location.href = "cashier.hta";
                    }
                } else {
                    alert("Login failed: " + response.message);
                }
            } catch (e) {
                alert("Error processing login response.");
            }
        }
    };
    xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
}

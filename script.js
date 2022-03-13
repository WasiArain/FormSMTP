function sendEmail() {

    Email.send({
        SecureToken: "6532cf60-c30d-4cde-88c6-cd2fbd3c8c1f",
        // Host: "smtp.gmail.com",
        // Username: "email@gmail.com",
        // Password: "password",
        To: 'chaudhrywasiullah807@gmail.com',
        From: document.getElementById('email').value,
        Subject: "New Form Submission!",
        Body: "Name: " + document.getElementById('name').value +
            "<br> Email: " + document.getElementById('email').value +
            "<br> WhatsApp: " + document.getElementById('wapp').value +
            "<br> Message: " + document.getElementById('msg').value
    }).then(
        message => alert("Your Response has been Submitted!")
    );

}
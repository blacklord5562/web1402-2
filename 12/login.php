<?php
function register(){
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve the form data
        $username = $_POST['username'];
        $password = $_POST['password'];
    
        // Check if the username is "admin" and the password is "1234"
        if ($username == 'admin' && $password == '1234') {
            // Redirect to the welcome page
            header("Location: welcome.php");
            exit();
        } else {
            // If the credentials are incorrect, show an error message
            echo "Invalid username or password. Please try again.";
        }
    }
}
register();
?>

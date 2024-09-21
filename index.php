<?php

include("connection.php");

if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM signup WHERE email = '$email' and password='$password'";
    $result=mysqli_query($conn,$sql);
    $num = mysqli_num_rows($result);

    if($num > 0){
        header("location:home.html");
    }
    else{
        echo'<script>alert("Email id and password is not matching")</script>';
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" type="text/css" href="lstyle.css">
</head>
<body>
    <div>
        <h2 class="text-area">FOOD ZONE</h2>
        <form action="" method="POST">
            <h1>LOGIN</h1><br><br>
            <label>Username</label>
            <input type="email" class="hover" name="email" placeholder="Enter Mail ID" required/><br>
            <label>Password</label>
            <input type="password" class="hover" name="password" placeholder="Enter password" required/>
            <button type="submit" id="login" name="submit">LOGIN</button><br>
            <p>Don't have an account?&nbsp;<a href="signup.php">Signup Here</a></a>
        </form>
    </div>
</body>
</html>
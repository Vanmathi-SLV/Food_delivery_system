<?php

include("connection.php");

if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM signup WHERE email = '$email'";
    $result=mysqli_query($conn,$sql);
    $num = mysqli_num_rows($result);

    if($num > 0){
        echo'<script>alert("Email already exists!")</script>';
    }
    else{
        $insert= "INSERT INTO signup(email,password)VALUES('$email','$password')";
        mysqli_query($conn,$insert);
        header("location:index.php");
    }
}

?>

<html>
<head>
    <title>Signup</title>
    <link rel="stylesheet" type="text/css" href="lstyle.css">
</head>
<body>
    <div>
        <h2 class="text-area">FOOD ZONE</h2>
        <form action="" method="POST">
            <h1>SIGNUP</h1><br><br>
            <label>Username</label>
            <input type="email" name="email" placeholder="Enter Mail ID" requried/><br>
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter password" required/>
            <button type="submit" id="signup" name="submit">SIGNUP</button><br>
            <p>Have an account?&nbsp;<a href="index.html">Login Here</a></p>
        </form>
   </div> 
</body>
</html>
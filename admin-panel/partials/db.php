<?php

//connect to database
$host = "localhost";
$username = "root";
$password = "";
$dbname = "invitation";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // echo "Connected successfully";
}
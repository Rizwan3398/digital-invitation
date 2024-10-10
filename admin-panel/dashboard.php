<?php session_start();

if (isset($_SESSION['admin']) && !empty($_SESSION['admin'])) {
require_once 'partials/header.php';
 require_once 'partials/sidebar.php';
 require_once 'partials/navbar.php'; 

 require_once 'partials/footer.php'; 
 require_once 'partials/header-end.php';
} else {
    header('Location: index.php');
}
?>
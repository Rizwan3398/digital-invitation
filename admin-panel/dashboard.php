<?php
session_start();

if (isset($_SESSION['admin']) && !empty($_SESSION['admin'])) {
    require_once 'partials/header.php';
    require_once 'partials/sidebar.php';
    require_once 'partials/navbar.php';
    ?>
    <div class = "container">
        <h1>Welcome to Digital Invitation</h1>
    </div >
    <?php
    require_once 'partials/footer.php';
    require_once 'partials/header-end.php';
} else {
    header('Location: index.php');
}
?>
<?php session_start();
require_once 'partials/db.php';
require_once 'partials/header.php';


if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM `login` WHERE `user_name` = '$email'";
    $result = mysqli_query($conn, $sql);

    while ($row = mysqli_fetch_assoc($result)) {
        if ($row['user_name'] == $email) {
            if ($row['password'] == $password) {
                $_SESSION['admin'] = $row['user_name'];

                header('Location: dashboard.php');
            } else {
                die("Password is wrong");
            }
        }
    }
    die("Email is wrong");
}
?>
<!-- Sign In Start -->
<div class="container-fluid">
    <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
        <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <a href="index.php" class="">
                        <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
                    </a>
                    <h3>Sign In</h3>
                </div>
                <form method="POST">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" name="email" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" name="password" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button type="submit" name="submit" class="btn btn-primary py-3 w-100 mb-4">Sign In</button>
                </form>

            </div>
        </div>
    </div>
</div>
<!-- Sign In End -->

<?php require_once 'partials/header-end.php'; ?>
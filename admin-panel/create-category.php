<?php session_start();
if (isset($_SESSION['admin']) && !empty($_SESSION['admin'])) {
    require_once 'partials/header.php';
    require_once 'partials/sidebar.php';
    require_once 'partials/navbar.php';

?>
    <!-- Form Start -->
    <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
            <div class="col-sm-12 col-xl-12 mx-auto">
                <div class="bg-light rounded h-100 p-4">
                    <h1 class="text-center mb-4">Create Category</h1>
                    <form method="POST">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Category Name</label>
                            <input type="text" class="form-control" name="category_name">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Category Price</label>
                            <input type="text" class="form-control" name="category_price">
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Form End -->



<?php
    require_once 'partials/footer.php';
    require_once 'partials/header-end.php';
} else {
    header('Location: index.php');
}
?>
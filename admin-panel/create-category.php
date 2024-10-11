<?php
session_start();
ob_start(); // Start output buffering
if (isset($_SESSION['admin']) && !empty($_SESSION['admin'])) {
    require_once 'partials/db.php';
    require_once 'partials/header.php';
    require_once 'partials/sidebar.php';
    require_once 'partials/navbar.php';

    if (isset($_GET['id'])) {
        $query = "SELECT * FROM `category` WHERE `id`='".$_GET['id']."'";
        $result = mysqli_query($conn, $query);
        if($row = mysqli_fetch_assoc($result)){
            $category_name = $row['category_name'];
            $category_price = $row['category_price'];
        }
    }
    if (isset($_POST['submit'])) {
        $category_name = $_POST['category_name'];
        $category_price = $_POST['category_price'];
        $error = '';
        if ($category_name == '') {
            $error1 = 'Category name is required';
        }
        if ($category_price == '') {
            $error2 = "Category price is required";
        }
        if ($category_name != '' && $category_price != '') {
            $sql = "INSERT INTO `category` (`category_name`, `category_price`) VALUES ('$category_name', '$category_price')";
            $result = mysqli_query($conn, $sql);
            if ($result) {
                header('Location: manage-category.php');
                exit;
            } else {
                $error = "!Sorry, Your category is not inserted";
            }
        }
    }
    ob_end_flush(); // End output buffering and flush output
    ?>
    <!-- Form Start -->
    <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
            <div class="col-sm-12 col-xl-12 mx-auto">
                <div class="bg-light rounded h-100 p-4">
                    <h1 class="text-center mb-4">Create Category</h1>
                    <p class="text-danger"><?= isset($error) && $error != '' ? $error : "" ?></p>
                    <form method="POST">
                        <div class="mb-3">
                            <p class="text-danger"><?= isset($error1) && $error1 != '' ? $error1 : "" ?></p>
                            <label for="exampleInputEmail1" class="form-label">Category Name</label>
                            <input type="text" class="form-control" name="category_name" value="<?= isset($category_name) ? $category_name : ""?>">
                        </div>
                        <div class="mb-3">
                            <p class="text-danger"><?= isset($error2) && $error2 != '' ? $error2 : "" ?></p>
                            <label for="exampleInputPassword1" class="form-label">Category Price</label>
                            <input type="text" class="form-control" name="category_price" value="<?= isset($category_price) ? $category_price : ""?>">
                        </div>
                        <button type="submit" name="submit" class="btn btn-primary">Submit</button>
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
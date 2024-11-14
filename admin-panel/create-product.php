<?php
session_start();
ob_start(); // Start output buffering
if (isset($_SESSION['admin']) && !empty($_SESSION['admin'])) {
    require_once 'partials/db.php';
    require_once 'partials/header.php';
    require_once 'partials/sidebar.php';
    require_once 'partials/navbar.php';

    if (isset($_GET['id'])) {
        $query = "SELECT * FROM `products` WHERE `id`='" . $_GET['id'] . "'";
        $result = mysqli_query($conn, $query);
        if ($row = mysqli_fetch_assoc($result)) {
            $id = $row['category_id'];
            $name = $row['name'];
            $code = $row['code'];
            $actual_price = $row['actual_price'];
            $discount_price = $row['discount_price'];
            $youtube_link = $row['youtube_link'];
        }
    }
    if (isset($_GET['id'])) {
    } else {
        if (isset($_POST['submit'])) {
            $category_name = $_POST['category_id'];
            $name = $_POST['name'];
            $code = $_POST['code'];
            $actual_price = $_POST['actual_price'];
            $discount_price = $_POST['discount_price'];
            $youtube_link = $_POST['youtube_link'];
            $error = '';
            if ($category_name == '') {
                $error1 = 'Category name is required';
            }
            if ($name == '') {
                $error2 = "Name is required";
            }
            if ($code == '') {
                $error3 = "Code is required";
            }
            if ($actual_price == '') {
                $error4 = "Actual price is required";
            }
            if ($discount_price == '') {
                $error5 = "Discount price is required";
            }
            if ($youtube_link == '') {
                $error6 = "Youtube link is required";
            } else {
                $youtubeRegex = '/^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/';
                if (!preg_match($youtubeRegex, $youtube_link)) {
                    $error6 = "Invalid YouTube link";
                }
            }
            if ($category_name != '' && $name != '' && $code != '' && $actual_price != '' && $discount_price != '' && $youtube_link != '' && strpos($youtube_link, 'youtube.com/watch?v=') !== false) {
                $sql = "INSERT INTO `products`( `category_id`, `name`, `code`, `actual_price`, `discount_price`, `youtube_link`)
            VALUES ('$category_name','$name','$code','$actual_price','$discount_price','$youtube_link')";
                $result = mysqli_query($conn, $sql);
                if ($result) {
                    header('Location: manage-product.php');
                    exit;
                } else {
                    $error = "!Sorry, Your category is not inserted";
                }
            } else {
                $error = "Invalid YouTube link";
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
                    <h1 class="text-center mb-4">Create Product</h1>
                    <p class="text-danger"><?php //isset($error) && $error != '' ? $error : "" 
                                            ?></p>
                    <form method="POST">
                        <div class="row">
                            <div class="col-lg-6">
                                <p class="text-danger"><?= isset($error1) && $error1 != '' ? $error1 : "" ?></p>
                                <label for="" class="form-label">Category Name</label>
                                <?php
                                $query = "SELECT * FROM `category`";
                                $result = mysqli_query($conn, $query);
                                ?>
                                <select class="form-select" name="category_id">
                                    <option value="">Please Select Category</option>
                                    <?php
                                    while ($row = mysqli_fetch_assoc($result)) {
                                        $category_id = $row['id'];
                                        $category_name = $row['category_name'];

                                    ?>
                                        <option value="<?= isset($category_id) ? $category_id : "" ?>"
                                            <?= isset($id) && $id == $category_id ? "selected" : "" ?>>
                                            <?= isset($category_id) ? $category_name : "" ?></option>
                                    <?php
                                    }
                                    ?>
                                </select>
                            </div>
                            <div class="col-lg-6">
                                <p class="text-danger"><?= isset($error2) && $error2 != '' ? $error2 : "" ?></p>
                                <label for="exampleInputPassword1" class="form-label">Name</label>
                                <input type="text" class="form-control" name="name" placeholder="Name"
                                    value="<?= isset($name) ? $name : "" ?>">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <p class="text-danger"><?= isset($error3) && $error3 != '' ? $error3 : "" ?></p>
                                <label for="exampleInputPassword1" class="form-label">Code</label>
                                <input type="text" class="form-control" name="code" placeholder="Code"
                                    value="<?= isset($code) ? $code : "" ?>">
                            </div>
                            <div class="col-lg-6">
                                <p class="text-danger"><?= isset($error4) && $error4 != '' ? $error4 : "" ?></p>
                                <label for="exampleInputPassword1" class="form-label">Actual Price</label>
                                <input type="text" class="form-control" name="actual_price" placeholder="Actual Price"
                                    value="<?= isset($actual_price) ? $actual_price : "" ?>">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <p class="text-danger"><?= isset($error5) && $error5 != '' ? $error5 : "" ?></p>
                                <label for="exampleInputPassword1" class="form-label">Discount Price</label>
                                <input type="text" class="form-control" name="discount_price" placeholder="Discount Price"
                                    value="<?= isset($discount_price) ? $discount_price : "" ?>">
                            </div>
                            <div class="col-lg-6">
                                <p class="text-danger"><?= isset($error6) && $error6 != '' ? $error6 : "" ?></p>
                                <label for="exampleInputPassword1" class="form-label">YouTube Link</label>
                                <input type="text" class="form-control" name="youtube_link" placeholder="YouTube Link"
                                    value="<?= isset($youtube_link) ? $youtube_link : "" ?>">
                            </div>
                        </div>
                        <button type="submit" name="submit" class="btn btn-primary mt-4">Submit</button>
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
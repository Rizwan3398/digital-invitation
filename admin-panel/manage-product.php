<?php
session_start();
ob_start();
if (isset($_SESSION['admin']) && !empty($_SESSION['admin'])) {
    require_once 'partials/db.php';
    require_once 'partials/header.php';
    require_once 'partials/sidebar.php';
    require_once 'partials/navbar.php';

    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $msg = '';
        $query = "DELETE FROM `category` WHERE `id`='" . $id . "'";

        $result = mysqli_query($conn, $query);
        if ($result) {
            header("Location: manage-category.php");
            exit();
        }
    }
    ob_end_flush();
?>
    <div class="container">
        <div class="col-lg-12 mx-auto">
            <div class="table-responsive">
                <h1 class="text-center mt-4 mb-4">Manage Category</h1>

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Category Name</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Actual Price</th>
                            <th>Discount Price</th>
                            <th>YouTube Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $query = "SELECT * FROM `products` INNER JOIN `category` ON `products`.`category_id`=`category`.`id`";
                        $result = mysqli_query($conn, $query);
                        $id = 1;
                        while ($row = mysqli_fetch_array($result)) {
                            // $id = $row['id'];
                            $category_name = $row['category_name'];
                            $name = $row['name'];
                            $code = $row['code'];
                            $actual_price = $row['actual_price'];
                            $discount_price = $row['discount_price'];
                            $youtube_link = $row['youtube_link'];
                            // Parse the URL to get the video ID
                            parse_str(parse_url($youtube_link, PHP_URL_QUERY), $url_params);
                            $video_id = $url_params['v'] ?? null; // Extracts 'QiikUPM_L4w' from the URL
                        ?>
                            <tr>
                                <td><?= $id ?></td>
                                <td><?= $category_name ?></td>
                                <td><?= $name ?></td>
                                <td><?= $code ?></td>
                                <td><?= $actual_price ?></td>
                                <td><?= $discount_price ?></td>
                                <td>
                                    <iframe src="https://www.youtube.com/embed/<?= htmlspecialchars($video_id) ?>"
                                        frameborder="0" allowfullscreen></iframe>
                                </td>
                                <td>
                                    <a href="create-product.php?id=<?= $id ?>" class="btn btn-warning me-2">
                                        <i class="fas fa-pencil-alt"></i>
                                    </a>
                                    <a href="manage-category.php?id=<?= $id ?>" class="btn btn-danger">
                                        <i class="fas fa-trash-alt"></i>
                                    </a>
                                </td>

                            </tr>
                        <?php
                            $id++;
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


<?php
    require_once 'partials/footer.php';
    require_once 'partials/header-end.php';
}
?>
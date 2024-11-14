<?php
require_once("admin-panel/partials/db.php");
?>
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from invitoai.com/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Oct 2024 06:24:03 GMT -->

<head>

    <meta name="facebook-domain-verification" content="sr71cyxdqkh3l3k6l74z0x3fqhdfdq" />
    <meta name="p:domain_verify" content="8c89bf6a7675dbfce8fe38b44b16937e" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;family=Itim&amp;family=Montserrat:ital,wght@0,100..900;1,100..900&amp;family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap"
        rel="stylesheet">
    <link rel="icon" href="assets/images/logo.webp">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/components/nav.css">
    <link rel="stylesheet" href="css/components/footer.css">
    <link rel="stylesheet" type="text/css" href="../cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer">

    <!-- Google Tag Manager -->
    <script>
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            '../www.googletagmanager.com/gtm5445.html?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TTDJ8RKR');
    </script>
    <!-- End Google Tag Manager -->

    <title>Invito | Video Invitation Maker Online | Digital Video Invite Designer Free Templates</title>
</head>

<body>

    <custom-navbar></custom-navbar>

    <section>
        <div class="hero-section">
            <div class="container-wrapper">
                <div class="container active">
                    <div class="info">
                        <div class="title">
                            <p>Impress Anyone with <span>5000+ Digital Video Invites</span></p>
                        </div>
                        <div class="content">
                            <p>Make your big day most memorable with 1000+ Wedding, Engagement, Birthday, Anniversary,
                                Parties and more invitation templates</p>
                        </div>
                        <div class="content create-now-btn">
                            <p>Get Video Invites at ₹ 399/-</p>
                        </div>
                    </div>
                    <div class="hero-section-image">
                        <div class="image-container">
                            <img src="assets/images/hero-section/hero-section-1.webp" alt="Hero Section Image">
                        </div>
                    </div>
                </div>
                <div class="container disable">
                    <div class="info">
                        <div class="title">
                            <p>Customize <span>Digital Video</span> Invites</p>
                        </div>
                        <div class="content">
                            <p>Transform your special day with our beautifully crafted digital video invitation cards.
                            </p>
                        </div>
                        <div class="content create-now-btn">
                            <p>Get Video Invites at ₹ 399/-</p>
                        </div>
                    </div>
                    <div class="hero-section-image">
                        <div class="image-container">
                            <img src="assets/images/hero-section/hero-section-2.webp" alt="Hero Section Image">
                        </div>
                    </div>
                </div>
                <div class="container disable">
                    <div class="info">
                        <div class="title">
                            <p>Save Time & Money Be <span>Eco Friendly</span>, Go <span>Paperless</span></p>
                        </div>
                        <div class="content">
                            <p>Most Trusted Online Digital Video Invites Maker Share your e-invites on Whatsapp,
                                Facebook, E-mail etc.</p>
                        </div>
                        <div class="content create-now-btn">
                            <p>Get Video Invites at ₹ 399/-</p>
                        </div>
                    </div>
                    <div class="hero-section-image">
                        <div class="image-container">
                            <img src="assets/images/hero-section/hero-section-3.webp" alt="Hero Section Image">
                        </div>
                    </div>
                </div>
                <div class="container disable">
                    <div class="info">
                        <div class="title">
                            <p>How To <span>Create</span> Digital Video Invites?</p>
                        </div>
                        <div class="content">
                            <p>Follow Step by Step Video Tutorial, Edit readymade templates and Create Digital
                                Caricature Video invites in minutes.</p>
                            <!-- <p>Transform your special day with our beautifully crafted wedding invitation cards.</p> -->
                        </div>
                        <div class="content create-now-btn">
                            <p>Get Video Invites at ₹ 399/-</p>
                        </div>
                    </div>
                    <div class="hero-section-image video">
                        <div class="image-container">
                            <iframe
                                src="https://www.youtube.com/embed/bfifvzx-do8?si=QfgMK7LGHQl8G5MT&amp;amp_controls=0"
                                frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="prev-btn" onclick="prevSlide()">
                <i class="fa-solid fa-angle-left"></i>
            </div>
            <div class="next-btn" onclick="nextSlide()">
                <i class="fa-solid fa-angle-right"></i>
            </div>
        </div>
    </section>

    <section>
        <div class="info-section">
            <div class="title">
                <hr class="left">
                <h2>Best Video Invitation Making Platform</h2>
                <hr class="right">
            </div>
            <div class="information">
                <div>
                    <div class="image">
                        <img src="assets/images/index/clock.png" alt="Clock">
                    </div>
                    <div class="info">
                        <div class="title">
                            <p>24/7 Whatsapp support</p>
                        </div>
                        <hr>
                        <div class="content">
                            <p>Support is available 24 hours a day, 7 days a week.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="image">
                        <img src="assets/images/index/online-payment.png" alt="Online Payment">
                    </div>
                    <div class="info">
                        <div class="title">
                            <p>Online Payment</p>
                        </div>
                        <hr>
                        <div class="content">
                            <p>Pay from credit/Debit card, Net Banking, Any Digital Wallet with safest mode.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="image">
                        <img src="assets/images/index/fast-delivery.png" alt="Fast Delivery">
                    </div>
                    <div class="info">
                        <div class="title">
                            <p>Fastest AI Delivery</p>
                        </div>
                        <hr>
                        <div class="content">
                            <p>Get you eCard/Video Invites within 3-5 minutes.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="image">
                        <img src="assets/images/index/quality-product.png" alt="Quality Product">
                    </div>
                    <div class="info">
                        <div class="title">
                            <p>High Quality Product</p>
                        </div>
                        <hr>
                        <div class="content">
                            <p>We provide professional services with the best quality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="category-display-section">
        <div class="category-loader-modal">
            <div class="loader"></div>
        </div>
        <div class="categories-container">
            <div class="category">
                <?php
                $query = "SELECT * FROM `category`";
                $result = mysqli_query(mysql: $conn, query: $query);
                while ($row = mysqli_fetch_assoc($result)) {
                    $id = $row['id'];
                    $category_name = $row['category_name'];
                }
                ?>
                <div class="heading">
                    <p><?= $category_name ?></p>
                </div>
                <div class="category-slider">
                    <?php
                    $sql = "SELECT * FROM `products` WHERE category_id=$id";
                    $res = mysqli_query($conn, $sql);
                    while ($pro = mysqli_fetch_assoc($res)) {
                        // var_dump($pro);
                    ?>
                    <div class="content">
                        <div class="display-container">
                            <div class="img-container">
                                <img src="" alt="">
                            </div>
                        </div>
                        <div class="title-container">
                            <?= $pro['name'] . ' ' . $pro['code'] ?>
                        </div>
                        <div class="price-container">
                            <div class="price-strike">
                                <?= $pro['actual_price'] ?>
                            </div>
                            <div class="actual-price">
                                <?= $pro['discount_price'] ?>
                            </div>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="testimonial">
            <div class="heading">
                <p class="title">Our <span>Customer</span> Feedback</p>
                <p class="content">Don’t take our word for it. Trust our customers</p>
            </div>
            <div class="reviews-container">
                <div class="review">
                    <div class="heading">
                        <div class="profile">
                            <img src="assets/images/index/user-1.webp" alt="">
                            <p>Floyd Miles</p>
                        </div>
                        <div class="rating">
                            <img src="assets/images/index/star-rating3.webp" alt="">
                        </div>
                    </div>
                    <div class="content">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div class="review">
                    <div class="heading">
                        <div class="profile">
                            <img src="assets/images/index/user-2.webp" alt="">
                            <p>Ronald Richards</p>
                        </div>
                        <div class="rating">
                            <img src="assets/images/index/star-rating4.webp" alt="">
                        </div>
                    </div>
                    <div class="content">
                        <p>ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div class="review">
                    <div class="heading">
                        <div class="profile">
                            <img src="assets/images/index/user-3.webp" alt="">
                            <p>Savannah Nguyen</p>
                        </div>
                        <div class="rating">
                            <img src="assets/images/index/star-rating3.webp" alt="">
                        </div>
                    </div>
                    <div class="content">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <custom-footer></custom-footer>
</body>

<!-- Fontawesome -->
<script defer src="../kit.fontawesome.com/8be31a1edc.js" crossorigin="anonymous"></script>

<!-- Lottie Animation -->
<script src="js/utilities/lottie.js"></script>

<!-- Encrypt Storage -->
<script src="../unpkg.com/encrypt-storage%402.13.3/dist/index.js"></script>

<!-- Custom Script -->
<script src="../cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js"></script>
<script src="js/components/nav.js"></script>
<script src="js/components/footer.js"></script>
<script defer src="js/index.js"></script>
<script type="module">
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyBGaLOfmpZqISwM8Du-QqHcbZHei05rXVo",
//   authDomain: "gjhgjh-be270.firebaseapp.com",
//   projectId: "gjhgjh-be270",
//   storageBucket: "gjhgjh-be270.appspot.com",
//   messagingSenderId: "408095019436",
//   appId: "1:408095019436:web:ef9c1dbc9887bcb0e9aa09",
//   measurementId: "G-92KV585F0F"
// };

// // Initialize Firebase
// app = initializeApp(firebaseConfig);
// analytics = getAnalytics(app);
</script>


<!-- Mirrored from invitoai.com/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Oct 2024 06:24:10 GMT -->

</html>
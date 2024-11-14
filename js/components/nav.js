class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                            <header>
                                <div class="top-nav">
                                <i class="fa-solid fa-angle-left" onclick="showNavInfo()"></i>
                                <div>
                                    <div class="info">
                                    <div id="left-info" class="active">
                                        <p>Enjoy 15% OFF on all our video invites! Use Code <b>INVITOAI15</b> at checkout</p>
                                    </div>
                                    <div id="right-info">
                                        <p><span>Premium Animated Video Invitations >> Contact us to create custom video invites</span><i class="fa-solid fa-arrow-right"></i></p>
                                    </div>
                                    </div>
                                </div>
                                <i class="fa-solid fa-angle-right" onclick="showNavInfo()"></i>
                                </div>
                            </header> 
                            <nav>
                                <div class="navbar">
                                <div class="logo">
                                    <a href="/">InvitoAi</a>
                                </div>
                                <div class="search-bar">
                                    <input type="search" autocomplete placeholder="Enter Video Detail" id="search-video-input" oninput="checkParam()" inputmode="search" onkeypress="handleKeyPress(event)">
                                    <i class="fa-solid fa-magnifying-glass" onclick="searchVideo()"></i>
                                </div>
                                <div class="navigations">
                                    <a href="/">Home</a>
                                    <div class="category-section">
                                    <div class="title">
                                        <span>Categories</span>
                                        <i class="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div class="category-modal">
                                        <div class="categories"></div>
                                    </div>
                                    </div>
                                    <a href="/about-us">About Us</a>
                                    <a href="/contact-us">Contact Us</a>
                                </div>
                                <button class="login-btn login" onclick="openLoginModal()">
                                    <p>Login</p>
                                </button>
                                <div class="user-dashboard">
                                    <div class="user-icon">
                                        <img src="/assets/images/index/user-icon.webp" alt="User Logo Icon">
                                    </div>
                                    <div class="hamburger">
                                        <i class="fa-solid fa-bars"></i>
                                    </div>
                                    <div class="dashboard">
                                        <div class="user-name">
                                            <p>Hi, <span></span></p>
                                        </div>
                                        <div class="categories">
                                            <a href="/">Home</a>
                                            <a href="/category/wedding" target="_blank">Categories</a>
                                            <a href="/my-draft">My Draft</a>
                                            <a href="/my-order">My Orders</a>
                                        </div>
                                        <button class="login-btn login" onclick="openLoginModal()">
                                            <p>Login</p>
                                        </button>
                                        <button class="login-btn logout" onclick="logOut()">
                                            <p>Logout</p>
                                        </button>
                                    </div>
                                </div>
                            </nav>

                            <div class="loader-modal">
                                <div class="loader"></div>
                            </div>
                    
                    
                            <!-- Login Modal -->
                            <div class="login-modal">
                                <div class="login-content">
                                    <div class="left">
                                        <div class="img-container">
                                            <img src="/assets/images/logo.webp" alt="Logo">
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="close-btn" onclick="closeLoginModal()">
                                            <i class="fa-solid fa-xmark"></i>
                                        </div>
                                        <div class="signin-container active">
                                            <div class="title">
                                                <p>Sign In</p>
                                            </div>
                                            <div class="content">
                                                <p>Welcome to <span>Invito</span></p>
                                            </div>
                                            <form class="input-form">
                                                <div class="email-container">
                                                    <i class="fa-solid fa-envelope"></i>
                                                    <label for="email">
                                                        <input type="email" name="email" id="register-email" required>
                                                        <span>Email</span>
                                                    </label>
                                                </div>
                                                <div class="password-container">
                                                    <i class="fa-solid fa-lock"></i>
                                                    <label for="password">
                                                        <input type="password" name="password" id="register-pass" required>
                                                        <span>Password</span>
                                                        <span class="show-pass" onclick="showHidePassword(this)"><i class="fa-regular fa-eye"></i></span>
                                                    </label>
                                                </div>
                                                <div class="forgot-pass" data-type="reset" onclick="goToPage(this)">
                                                    <p>Forgot Password ?</p>
                                                </div>
                                                <button class="signin" onclick="signIn()">Sign in</button>
                                            </form>
                                            <div class="error">
                                                <p>Error</p>
                                            </div>
                                            <div class="create-account">
                                                <hr>
                                                <p>Not a member yet ? <span data-type="signup" onclick="goToPage(this)">Sign Up</span>.</p>
                                            </div>
                                        </div>
                                        <div class="signup-container">
                                            <div class="title">
                                                <p>Sign Up</p>
                                            </div>
                                            <form class="input-form">
                                                <div>
                                                    <i class="fa-solid fa-user"></i>
                                                    <label for="fullname">
                                                        <input type="text" name="fullname" id="create-fullname" required>
                                                        <span>Full Name</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-phone"></i>
                                                    <label for="phonenumber">
                                                        <input type="text" name="phonenumber" id="create-phonenumber" required pattern="[0-9]{10,15}" maxlength="15" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                                                        <span>Phone</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-envelope"></i>
                                                    <label for="email">
                                                        <input type="email" name="email" id="create-email" required>
                                                        <span>Email</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-lock"></i>
                                                    <label for="password">
                                                        <input type="password" name="password" id="create-pass" required>
                                                        <span>Password</span>
                                                        <span class="show-pass" onclick="showHidePassword(this)"><i class="fa-regular fa-eye"></i></span>
                                                    </label>
                                                </div>
                                                <!--<div id="verify-otp" class="pe_signin_button" data-client-id="18469684677318098301"></div>-->
                                                <button class="signin" onclick="signUp()">Sign up</button>
                                            </form>
                                            <div class="error">
                                                <p></p>
                                            </div>
                                            <div class="create-account">
                                                <hr>
                                                <p>Already have an account ? <span data-type="signin" onclick="goToPage(this)">Sign In</span>.</p>
                                            </div>
                                        </div>
                                        <div class="reset-container">
                                            <div class="title">
                                                <p>Forgot Your Password ?</p>
                                            </div>
                                            <div class="input-form">
                                                <form class="email-container">
                                                    <i class="fa-solid fa-user"></i>
                                                    <label for="email">
                                                        <input type="email" name="email" id="forgot-email">
                                                        <span>Email</span>
                                                    </label>
                                                    <button class="signin reset-btn" onclick="resetPass()">Send reset Password link</button>
                                                </form>
                                                <div class="error">
                                                    <p></p>
                                                </div>
                                                <button class="signin" data-type="signin" onclick="goToPage(this)">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        `
    }
}

customElements.define("custom-navbar", Navbar);

// let verifyOtpScript = document.createElement('script')
// verifyOtpScript.src = "https://www.phone.email/sign_in_button_v1.js"
// document.body.append(verifyOtpScript)

let categoryData = []

function showNavInfo() {
    document.getElementById('left-info').classList.toggle('active')
    document.getElementById('right-info').classList.toggle('active')
}

setInterval(() => {
    showNavInfo()
}, 4000);

async function setCategories() {
    let categoryContainer = document.querySelector('.category-modal .categories')
    let response = await fetch('https://invitoai.com/invito/api/video_list.php')
    response = await response.json()
    if (response['status'] == 200) {
        let data = response['result']
        data = data['data']
        data.forEach((video)=>{
            let categoryEle = document.createElement('a')
            categoryEle.href = `/category/${video['category'].toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,'-').replaceAll('---','-')}`
            categoryEle.target = '_blank'
            categoryEle.innerHTML = video['category']
            categoryContainer.append(categoryEle)
            let duplicateEle = categoryEle.cloneNode(true)
            document.querySelector('.contact-info-container .categories .content').append(duplicateEle)
            if (window.location.href.includes('category')) {
                let hashCategory = document.querySelector('.hash-categories')
                let categoryContainer = document.createElement('div')
                categoryContainer.classList.add('category')
                categoryContainer.dataset.category = video['category'].toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,'-').replaceAll('---','-')
                let categoryLink = document.createElement('a')
                categoryLink.href = `/category/${video['category'].toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,'-').replaceAll('---','-')}`
                categoryLink.innerHTML = `#${video['category']}`
                categoryContainer.append(categoryLink)
                hashCategory.append(categoryContainer)
            }
        })
        if (window.location.href.includes('category')) {
            document.querySelector(`.hash-categories > div[data-category="${category}"]`).classList.add('active')
        }
    } else {
        console.log('No Details')
    }
}

setCategories()


if (window.location.pathname != '/') {
    document.querySelector('.search-bar').style.display = 'none'
}

document.querySelector('.navigations .category-section').addEventListener('mouseenter',()=>{
    document.querySelector('.navigations .category-section .category-modal').style.display = 'flex'
    document.querySelector('.navigations .category-section .title i').style.scale = '-1'
    setTimeout(() => {
        document.querySelector('.navigations .category-section .category-modal').style.top = '100%'
    }, 20);
})

document.querySelector('.navigations .category-section').addEventListener('mouseleave',()=>{
    document.querySelector('.navigations .category-section .category-modal').style.top = '-1500%'
    setTimeout(() => {
        document.querySelector('.navigations .category-section .category-modal').style.display = 'none'
        document.querySelector('.navigations .category-section .title i').style.scale = '1'
    }, 200);
})

document.querySelector('.user-dashboard').addEventListener('click',()=>{
    let userDashboard = document.querySelector('.user-dashboard .dashboard')
    if (getComputedStyle(userDashboard).display == 'none') {
        userDashboard.style.display = 'flex'
    } else {
        userDashboard.style.display = 'none'
    }
})

document.querySelector('.user-dashboard').addEventListener('mouseleave',()=>{
    document.querySelector('.user-dashboard .dashboard').style.display = 'none'
})


// Login Functionality
let windowWidth = window.innerWidth


checkUserLogin()



async function openLoginModal() {
    document.querySelector('.login-modal').style.display = 'flex'
}


document.querySelectorAll('.right input').forEach((ele)=>{
    ele.addEventListener('focus', () => {
        ele.parentElement.classList.add('active')
    })
    ele.nextElementSibling.addEventListener('click', () => {
        ele.focus()
        ele.parentElement.classList.add('active')
    })
    ele.addEventListener('blur', () => {
        if (ele.value == '') {
            ele.parentElement.classList.remove('active')
        }
    })
    if(ele.value != '') {
        ele.nextElementSibling.style.top = 0
        ele.nextElementSibling.style.translate = '0 -50%'
    }
})


function showHidePassword(ele) {
    let passwordInput = ele.parentElement.querySelector('input[name=password]');
    if (passwordInput.type === "password") {
        ele.querySelector('i').classList.add('fa-eye-slash')
        ele.querySelector('i').classList.remove('fa-eye')
        passwordInput.type = "text";
    } else {
        ele.querySelector('i').classList.add('fa-eye')
        ele.querySelector('i').classList.remove('fa-eye-slash')
        passwordInput.type = "password";
    }
}


function closeLoginModal() {
    document.querySelector('.login-modal').style.display = 'none'
    if (window.location.href.includes('my-order') || window.location.href.includes('my-draft')) {
        window.location.href = '/'
    }
}

function goToPage(ele) {
    if (ele.dataset.type == 'signup') {
        document.querySelector('.login-modal .signup-container').classList.add('active')
        document.querySelector('.login-modal .signin-container').classList.remove('active')
        document.querySelectorAll('.signin-container .input-form input').forEach((ele)=>{
            ele.value = ''
            ele.parentElement.classList.remove('active')
        })
    } else if (ele.dataset.type == 'signin') {
        document.querySelector('.login-modal .signup-container').classList.remove('active')
        document.querySelector('.login-modal .reset-container').classList.remove('active')
        document.querySelector('.login-modal .signin-container').classList.add('active')
        document.querySelectorAll('.signup-container .input-form input').forEach((ele)=>{
            ele.value = ''
            ele.parentElement.classList.remove('active')
        })
    } else if (ele.dataset.type == 'reset') {
        document.querySelector('.login-modal .reset-container').classList.add('active')
        document.querySelector('.login-modal .signin-container').classList.remove('active')
        document.querySelectorAll('.signin-container .input-form input').forEach((ele)=>{
            ele.value = ''
            ele.parentElement.classList.remove('active')
        })
    }
}

async function signIn() {
    let useremail = document.getElementById('register-email').value
    let userpass = document.getElementById('register-pass').value
    if (useremail == '' || userpass == '') {
        return
    }
    event.preventDefault()
    let userData = {
        "email": useremail,
        "password": userpass
    }
    let response = await fetch(
        'https://invitoai.com/invito/api/login.php',
        {
            headers: {
                "Content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(userData)
        }
    )
    response = await response.json()
    if (response['status'] != 200) {
        document.querySelector('.signin-container .error').style.display = 'block'
        document.querySelector('.signin-container .error p').innerHTML = response['title']
        setTimeout(() => {
            document.querySelector('.signin-container .error').style.display = 'none'
        }, 2000);
    } else {
        let encryptLocalStorage = new EncryptStorage('invito-secret-storage');
        encryptLocalStorage.setItem('Aizwoalsdfy', response['result'])
        closeLoginModal()
        checkUserLogin()
    }

}

async function signUp() {
    let username = document.getElementById('create-fullname').value
    let useremail = document.getElementById('create-email').value
    let userpass = document.getElementById('create-pass').value
    let usernumber = document.getElementById('create-phonenumber').value
    if (username == '' || useremail == '' || userpass == '' || usernumber == '') {
        return
    }
    // let usernumber = document.querySelector('.signup-container .signin').getAttribute('user-num') || ''
    event.preventDefault()
    let userData = {
        "name": `${username}|${usernumber}`,
        "email": useremail,
        "password": userpass
    }
    let response = await fetch(
        'https://invitoai.com/invito/api/register.php',
        {
            headers: {
                "Content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(userData)
        }
    )
    response = await response.json()
    if (response['status'] != 200) {
        document.querySelector('.signup-container .error').style.display = 'block'
        document.querySelector('.signup-container .error p').innerHTML = response['title']
        setTimeout(() => {
            document.querySelector('.signup-container .error').style.display = 'none'
        }, 2000);
    } else {
        let encryptLocalStorage = new EncryptStorage('invito-secret-storage');
        encryptLocalStorage.setItem('Aizwoalsdfy', response['result'])
        document.querySelector('.signup-container .signin').removeAttribute('user-num')
        closeLoginModal()
        checkUserLogin()
    }
}

async function phoneEmailListener(userObj) {
    var user_country_code = userObj.user_country_code;
    var user_phone_number = userObj.user_phone_number;
    document.getElementById('verify-otp').style.display = 'none'
    document.querySelector('.signup-container .signin').removeAttribute('disabled')
    document.querySelector('.signup-container .signin').setAttribute('user-num', `${user_country_code}${user_phone_number}`)
}

async function logOut() {
    let encryptLocalStorage = new EncryptStorage('invito-secret-storage');
    encryptLocalStorage.removeItem('Aizwoalsdfy')
    checkUserLogin()
}

async function checkUserLogin() {
    let encryptLocalStorage = new EncryptStorage('invito-secret-storage');
    let userData = encryptLocalStorage.getItem('Aizwoalsdfy')  // Used this to add some privacy
    if (!userData) {
        if (windowWidth <= 768) {
            document.querySelector('.user-dashboard').style.display = 'flex'
        } else {
            document.querySelector('.user-dashboard').style.display = 'none'
        }
        document.querySelector('.user-dashboard .user-icon').style.display = 'none'
        document.querySelector('.user-dashboard .logout').style.display = 'none'
        document.querySelector('.user-dashboard .dashboard .user-name').style.display = 'none'
        document.querySelector('.user-dashboard .hamburger').style.display = 'flex'
        document.querySelectorAll('.login').forEach((ele)=>{
            ele.style.display='block'
        })
        if (window.location.href.includes('my-order') || window.location.href.includes('my-draft')) {
            openLoginModal()
        }
    } else {
        document.querySelector('.user-dashboard .user-name span').innerHTML = userData['user']['name'].split('|')[0]
        document.querySelector('.user-dashboard').style.display = 'flex'
        document.querySelector('.user-dashboard .user-icon').style.display = 'flex'
        document.querySelector('.user-dashboard .dashboard .user-name').style.display = 'block'
        document.querySelector('.user-dashboard .logout').style.display = 'block'
        document.querySelector('.user-dashboard .hamburger').style.display = 'none'
        document.querySelectorAll('.login').forEach((ele)=>{
            ele.style.display='none'
        })
    }
}

// Firebase
let app, analytics
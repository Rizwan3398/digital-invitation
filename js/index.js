// let categoryContainer = document.querySelector('.categories-container')
// let slides = document.querySelector('.container-wrapper')
// let youtubeLink = {}
// let previousEle = ''
// let prevMouseX = 0;
// let prevMouseY = 0;
// let heroSectionSlider;

// window.onload = async ()=>{
//     document.querySelectorAll('.hero-section .hero-section-image:not(.video)').forEach((ele)=>{
//         ele.addEventListener('mousemove',(event)=>{
//             const mouseX = event.clientX;
//             const mouseY = event.clientY;

//             const container = ele.querySelector('.image-container');
//             const containerHeight = container.offsetHeight;

//             // Calculate the new position based on mouse coordinates
//             const newX = (mouseX - ele.offsetLeft)* (-0.01);
//             const newY = (mouseY - containerHeight / 2) * (-0.01);

//             // Update the container position
//             container.style.transform = `translate(${newX}px, ${newY}px)`;
//         })
//     })
//     document.querySelectorAll('.hero-section .hero-section-image:not(.video)').forEach((ele)=>{
//         ele.addEventListener('mouseleave',()=>{
//             ele.querySelector('.image-container').style.transform = 'translate(0px, 0px)'
//         })
//     })
//     startLoader()
//     await getData()
//     stopLoader()
//     // startSlider()
// }



// async function getData() {
//     let response = await fetch('https://invitoai.com/invito/api/video_list.php')
//     response = await response.json()
//     if (response['status'] == 200) {
//         let data = response['result']
//         data = data['data']
//         data.forEach(async (category)=>{
//             let categoryEle = await setDataInContainer(category)
//             categoryContainer.append(categoryEle)
//         })
//     } else {
//         console.log('No Details')
//     }
// }


// async function setDataInContainer (data) {
//     let category = document.createElement('div')
//     category.classList.add('category')
//     let heading = document.createElement('div')
//     heading.classList.add('heading')
//     let p = document.createElement('p')
//     p.innerHTML = data['category']
//     let linkEle = document.createElement('a')
//     linkEle.href = `/category/${data['category'].toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,'-').replaceAll('---','-')}`
//     linkEle.target = '_blank'
//     let linkTitle = document.createElement('p')
//     linkTitle.innerHTML = 'View all'
//     let icon = document.createElement('i')
//     icon.classList.add('fa-solid', 'fa-arrow-right')
//     linkEle.append(linkTitle, icon)
//     heading.append(p, linkEle)
//     let categorySlider = document.createElement('div')
//     categorySlider.classList.add('category-slider')
//     await Promise.all(
//         data['videos'].slice(0, 5).map(async (video) => {
//             let categoryContent = await setVideosInContainer(video);
//             categorySlider.append(categoryContent)
//         })
//     )
//     if (data['videos'].length > 5) {
//         let viewBtn = document.createElement('div')
//         viewBtn.classList.add('view-all-btn')
//         let p = document.createElement('a')
//         p.innerHTML = 'View all'
//         p.href = `/category/${data['category'].toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,'-').replaceAll('---','-')}`
//         p.target = '_blank'
//         let icon = document.createElement('i')
//         icon.classList.add('fa-solid', 'fa-arrow-right')
//         viewBtn.append(p, icon)
//         categorySlider.appendChild(viewBtn)
//     }
//     category.append(heading, categorySlider)
//     return category
// }

// async function setVideosInContainer(videoData) {
//     let thumbnailLink = videoData['link'].split('|')[0]
//     let videoLink = videoData['link'].split('|')[1]
//     youtubeLink[videoData['videoId']] = videoLink
//     let content = document.createElement('div')
//     content.classList.add('content')
//     let displayContainer = document.createElement('div')
//     displayContainer.classList.add('display-container')
//     let imageContainer = document.createElement('div')
//     imageContainer.classList.add('img-container')
//     let imageEle = document.createElement('img')
//     imageEle.src = thumbnailLink
//     imageContainer.append(imageEle)
//     let iframeContainer = document.createElement('div')
//     iframeContainer.classList.add('iframe-container')
//     let iframeEle = document.createElement('iframe')
//     iframeContainer.append(iframeEle)
//     let playBtn = document.createElement('div')
//     playBtn.classList.add('play-btn')
//     let icon = document.createElement('i')
//     icon.classList.add('fa-solid', 'fa-play')
//     playBtn.onclick = function () {
//         playVideo(this, videoData['videoId'])
//     }
//     playBtn.onmouseenter = function () {
//         playVideo(this, videoData['videoId'])
//     }
//     iframeContainer.onmouseleave = function () {
//         stopVideo()
//     }
//     playBtn.append(icon)
//     displayContainer.append(imageContainer, iframeContainer, playBtn)
//     let title = document.createElement('div')
//     title.classList.add('title-container')
//     let p = document.createElement('p')
//     p.innerHTML = videoData['title']
//     title.append(p)
   
//     let priceContainer = document.createElement('div')
//     priceContainer.classList.add('price-container')
//     let strikePrice = document.createElement('p')
//     strikePrice.innerHTML = `₹${videoData['price'] * 2 + 1}`
//     strikePrice.classList.add('strike-price')
//     let actualPrice = document.createElement('p')
//     actualPrice.innerHTML = `₹${videoData['price']}`
//     actualPrice.classList.add('actual-price')
//     let discount = document.createElement('p')
//     discount.innerHTML = `50% off`
//     discount.classList.add('discount')
//     priceContainer.append(strikePrice, actualPrice, discount)
   
//     let button = document.createElement('button')
//     button.classList.add('edit-btn')
//     let buttonTitle = document.createElement('p')
//     buttonTitle.innerHTML = 'Edit Template<br>(Pay After Delivery)'
//     button.append(buttonTitle)
    
//     button.onclick = () =>{
//         window.open(`/template/${videoData['title'].replaceAll('| ','').replaceAll('& ','').replaceAll(' ','-').toLowerCase()}`)
//     }

//     let whatsappBtn = document.createElement('div')
//     whatsappBtn.classList.add('whatsapp-icon')
//     let whatsappImage = document.createElement('img')
//     whatsappImage.src = '/assets/images/whatsapp-chat2.webp'
//     whatsappBtn.append(whatsappImage)
//     whatsappBtn.onclick = () => {
//         window.open(`https://wa.me/919328291116?text=InvitoAI+-+I need assistance with videoId- ${videoData['videoId']}.+Here+Is+My+Question...&app_absent=1`)
//     }
//     content.append(displayContainer, title , priceContainer, button, whatsappBtn)
//     return content
// }


// function playVideo(ele, id) {
//     if (previousEle != '') {
//         let previousParentElement = previousEle.parentElement
//         previousEle.style.display = 'flex'
//         previousParentElement.querySelector('.img-container').style.display = 'flex'
//         previousParentElement.querySelector('.iframe-container').style.display = 'none'
//         previousParentElement.querySelector('.iframe-container iframe').contentWindow.postMessage(
//             '{"event":"command", "func":"stopVideo" }',
//             "*"
//         )
//     }
//     previousEle = ele
//     let parentElement = ele.parentElement
//     let iframeContainer = parentElement.querySelector('.iframe-container iframe')
//     parentElement.querySelector('.img-container').style.display = 'none'
//     parentElement.querySelector('.iframe-container').style.display = 'flex'
//     if (iframeContainer.src == '') {
//         iframeContainer.src = youtubeLink[id] + '?enablejsapi=1&autoplay=1'
//         iframeContainer.allow = "autoplay"
//     }
//     ele.style.display = 'none'
// }

// function stopVideo() {
//     if (previousEle != '') {
//         let previousParentElement = previousEle.parentElement
//         previousEle.style.display = 'flex'
//         previousParentElement.querySelector('.img-container').style.display = 'flex'
//         previousParentElement.querySelector('.iframe-container').style.display = 'none'
//         previousParentElement.querySelector('.iframe-container iframe').contentWindow.postMessage(
//             '{"event":"command", "func":"stopVideo" }',
//             "*"
//         )
//     }
//     previousEle = ''
// }

// // Search Functionality

// async function searchVideo() {
//     let searchParam = document.getElementById('search-video-input')
//     if (searchParam.value != "") {
//         startLoader()
//         let response = await fetch(`https://invitoai.com/invito/api/video_serach_list.php?search=${searchParam.value}`)
//         response = await response.json()
//         if (response['status'] == 200) {
//             let data = response['result']
//             data = data['data']
//             data.forEach(async (video)=>{
//                 await setSearchData(video)
//             })
//         } else {
//             stopLoader()
//             console.log('No Details');
//         }
//     } else {
//         searchParam.focus()
//     }
// }

// async function checkParam() {
//     let searchParam = document.getElementById('search-video-input').value
//     if (searchParam == '') {
//         previousEle = ''
//         categoryContainer.innerHTML = ''
//         startLoader()
//         await getData()
//         stopLoader()
//     }
// }

// async function setSearchData(data) {
//     categoryContainer.innerHTML = ''
//     let category = document.createElement('div')
//     category.classList.add('category')
//     let categorySlider = document.createElement('div')
//     categorySlider.classList.add('category-slider', 'search-videos')
//     await Promise.all(data['videos'].map(async (video) => {
//         let categoryContent = await setVideosInContainer(video);
//         categorySlider.append(categoryContent)
//         category.append(categorySlider)
//     }))
//     categoryContainer.append(category)
//     stopLoader()
// }

// function handleKeyPress(event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         searchVideo()
//     }
// }


// async function startLoader(){
//     if (!document.getElementById('category-common-loader')) {
//         let loader = document.createElement('div');
//         loader.setAttribute('id', 'category-common-loader');
//         loader.setAttribute('style', 'height: 50vh;  width: 100%');
//         document.querySelector(".category-loader-modal .loader").appendChild(loader);
//         startLoadAnimation('category-common-loader');
//     }
//     document.querySelector(".category-loader-modal").style.display = 'flex';
// }

// function startLoadAnimation(loaderId) {
//     lottie.loadAnimation({
//         container: document.getElementById(loaderId),
//         renderer: "svg",
//         loop: true,
//         autoplay: true,
//         path: "/assets/animations/heart-lottie.json",
//     });
//     lottie.setSpeed(2)
// }

// function stopLoader() {
//     document.querySelector(".category-loader-modal").style.display = 'none';
// }

// let currentIndex = 0;

// function goToSlide(index) {
//     let slideWidth = document.querySelector('.container-wrapper .container').offsetWidth
//     slides.style.transform = `translateX(-${index * slideWidth}px)`;
//     // Remove active class from all slides
//     document.querySelectorAll('.container-wrapper .container').forEach(slide => {
//         slide.classList.remove('active');
//         slide.classList.add('disable');
//     });

//     // Add active class to current slide
//     slides.children[index].classList.add('active');
//     slides.children[index].classList.remove('disable');
//     // clearInterval(heroSectionSlider)
//     // startSlider()
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.children.length;
//     goToSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
//     goToSlide(currentIndex);
// }

// function startSlider() {
//     heroSectionSlider = setInterval(() => {
//         nextSlide()
//     }, 5000);
// }
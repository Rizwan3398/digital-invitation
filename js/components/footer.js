class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                            <footer>
                                <div class="footer">
                                    <div class="contact-info-container">
                                        <div class="about-us">
                                            <div class="title">
                                                <p>About us</p>
                                            </div>
                                            <hr>
                                            <div class="content">
                                                <p>Invito - Video Invitation Maker app designs Wedding Invitation Card Maker. Introducing the ultimate Video Invitation Maker Experience, your one-stop destination for crafting memorable moments with a huge collection of pre-made templates of e-invitation card designs! 🎉</p>
                                            </div>
                                            <div class="terms content">
                                                <div class="title">
                                                    <p>Terms and Policies</p>
                                                </div>
                                                <hr>
                                                <div class="content">
                                                    <a href="/terms-conditions">Terms and Conditions</a>
                                                    <a href="/privacy-policy">Privacy Policy</a>
                                                    <a href="/return-policy">Return Policy</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="categories">
                                        <div class="title">
                                            <p>Categories</p>
                                        </div>
                                        <hr>
                                        <div class="content"></div>
                                        </div>
                                        <div class="contact-us">
                                        <div class="title">
                                            <p>Contact Us</p>
                                        </div>
                                        <hr>
                                        <div class="content">
                                            <a href="tel:+919328291116">
                                                <i class="fa-solid fa-phone"></i>
                                                <p>+91-9328291116</p>
                                            </a>
                                            <a href="mailto:support@invitoai.com">
                                                <i class="fa-regular fa-envelope"></i>
                                                <p>support@invitoai.com</p>
                                            </a>
                                            <a href="https://play.google.com/store/apps/details?id=com.invito.videoinvitation" target="_blank">
                                                <img src="/assets/images/footer/google play logo.webp" alt="Google Play">
                                            </a>
                                            <a href="https://apps.apple.com/us/app/video-invitation-maker-invito/id6475583868" target="_blank">
                                                <img src="/assets/images/footer/app store logo.webp" alt="Apple Store">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="mobile-follow-us">
                                    <p>Follow Us on</p>
                                    <div class="social-icons">
                                        <a href="https://www.instagram.com/invitoai_videoinvitation?igsh=NXRhaDI1eGMxbTRn" target="_blank">
                                            <img src="/assets/images/footer/fb logo.webp" alt="Facebook Icon">
                                        </a>
                                        <a href="https://www.instagram.com/invitoai_videoinvitation?igsh=NXRhaDI1eGMxbTRn" target="_blank">
                                            <img src="/assets/images/footer/insta logo.webp" alt="Instagram Icon">
                                        </a>
                                        <a href="https://youtube.com/@invitoai?si=TL7859n28E4gtcyu" target="_blank">
                                            <img src="/assets/images/footer/youtube logo.webp" alt="Youtube Icon">
                                        </a>
                                    </div>
                                </div>
                                <hr>
                                <div class="info">
                                    <div class="copyright">
                                        <p>© Copyright 2024 Prime Infotech. All rights reserved.</p>
                                    </div>
                                    <div class="follow-us">
                                        <p>Follow Us on</p>
                                        <div class="social-icons">
                                            <a href="https://www.instagram.com/invitoai_videoinvitation?igsh=NXRhaDI1eGMxbTRn" target="_blank">
                                                <img src="/assets/images/footer/fb logo.webp" alt="Facebook Icon">
                                            </a>
                                            <a href="https://www.instagram.com/invitoai_videoinvitation?igsh=NXRhaDI1eGMxbTRn" target="_blank">
                                                <img src="/assets/images/footer/insta logo.webp" alt="Instagram Icon">
                                            </a>
                                            <a href="https://youtube.com/@invitoai?si=TL7859n28E4gtcyu" target="_blank">
                                                <img src="/assets/images/footer/youtube logo.webp" alt="Youtube Icon">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <!--<hr class="made-by">
                                <div class="extra-info">
                                    <a href="https://www.invitoai.com" target="_blank">
                                        <p>Made with ❤️ by InvitoAI</p>
                                    </a>
                                </div>-->
                                </div>
                            </footer>
        
        `
    }
}

customElements.define("custom-footer", Footer);
document.write(`
<!-- Footer Section starts -->
<div class="footer">
    <div class="footer-section1">
        <a href="index.php" >
        <img src="images/auxilogo.png" alt="">
        </a>
        <div class="footer_content">
        We love to fabricate an ambience that looks dazzling and speaks melodiously. We are industrial pioneers backed by our existing clients.
        </div>
        <div class="social_icons">
            <ul>
                <li><a href="https://www.facebook.com/AuxibleIndiaPvtLtd/" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/auxible_india/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://twitter.com/AuxibleI" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/company/auxible-india/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="https://www.tumblr.com/blog/view/auxibleindia" target="_blank"><i class="fa-brands fa-tumblr"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UC49s0ghoLYlI3iyHzXXwOgA" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
            </ul>
        </div>

        
    </div>
    <div class="footer-section2">
        <div class="information">
            <h3>Information</h3>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="company.php">Company</a></li>
                <li><a href="solution.php">Solutions</a></li>
                <li><a href="brand.php">Brands</a></li>
                <li><a href="sector.php">Enviornments</a></li>
                <li><a href="resources.php">Resources</a></li>
                <li><a href="policy.php">Privacy Policy</a></li>
                
            </ul>
        </div>
        <div class="contact-info">
            <h3>Contact Info</h3>
            <div class="email">
                <img src = "images/Group 70843.png" >
                <div>
                info@auxibleindia.com
                </div>
                
            </div>
            <div class="phone">
                <img src = "images/phone.png" >
                <div>
                <a href="tel:+91 88004 02825">+91 88004 02825</a>  <br> <a href="tel: +91 98719 92825"> +91 98719 92825</a>
                </div>
            </div>
            <div class="address">
                <img src = "images/Group 70842.png" >
                <div>
                  Basement, H- 224 i, Sector 63, <br>
                  Noida Uttar Pradesh 201301
                </div>
                
            </div>
        </div>
    </div>

</div>

<div class="copyrights">
  <div class="copyright-to">
    &#169; Copyright Auxible India Pvt Ltd. All Rights Reserved | Designed by <a href="https://kusheldigi.com/" target="_blank"> kusheldigi solution </a>     
  </div>      
</div>
<!-- Footer Section ends -->

<script src="js/script.js"></script>
<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>


<!-- Initialize Swiper -->
<script>
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    // loop: true,
    // loopFillGroupWithBlank: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".project-next-btn",
      prevEl: ".project-prev-btn",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
</script>

</body>
</html>
`);
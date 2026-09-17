document.write(`
<!-- Footer Section starts -->
<div class="footer">
    <div class="footer-section1">
        <a href="index.html" >
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
                <li><a href="index.html">Home</a></li>
                <li><a href="company.html">Company</a></li>
                <li><a href="solution.html">Solutions</a></li>
                <li><a href="brand.html">Brands</a></li>
                <li><a href="sector.html">Enviornments</a></li>
                <li><a href="resources.html">Resources</a></li>
                <li><a href="policy.html">Privacy Policy</a></li>
                
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
    &#169; Copyright 2026 Auxible India Pvt Ltd. All Rights Reserved | Designed by <a href="https://kusheldigi.com/" target="_blank"> Kushel Digi Solutions </a>     
  </div>      
</div>
<!-- Footer Section ends -->
`);

(function() {
  function injectScript(src, onload) {
    var s = document.createElement('script');
    s.src = src;
    s.async = false;
    if (onload) s.onload = onload;
    document.head.appendChild(s);
  }

  function initSwiper() {
    if (typeof Swiper !== 'undefined' && document.querySelector(".mySwiper")) {
      new Swiper(".mySwiper", {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".project-next-btn",
          prevEl: ".project-prev-btn",
        },
        breakpoints: {
          300: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 4, slidesPerGroup: 4 },
        },
      });
    }
  }

  if (!window.jQuery) {
    injectScript("https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js");
  }

  if (!window.Swiper) {
    injectScript("https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js", initSwiper);
  } else {
    initSwiper();
  }

  injectScript("js/script.js");
})();
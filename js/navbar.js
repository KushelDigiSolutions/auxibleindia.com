document.write(`
<!-- Navbar Starts-->
<nav class="navbar">
    <!-- Company Logo -->
    <div class="logo">
    <a href="index.php" >
        <img src="images/Mask Group 291.png" alt="" >  
    </a>
    </div>
    <!-- Menu -->
    <div class="menu">
    <input type="checkbox" id="click">
    <label for="click" class="hamburger-icon">
        <i class="fa-solid fa-bars"></i>
    </label>
        <ul>
            <li class="home-section"><a id="menu_home" href="index.php">Home</a></li>
            <li class="company"><a id="menu_company"   href="company.php">Company</a></li>
            <li class="solution"><a id="menu_solution"  href="solution.php">Solutions</a></li>
            <li class="brand"><a id="menu_brand"  href="brand.php">Brands</a></li>
            <li class="sector"><a id="menu_sector"  href="sector.php">Environments</a></li>
            <li class="sector"><a id="menu_sector"  href="project.php">Project</a></li>
            <li class="resources"><a id="menu_resources"  href="resources.php">Resources</a></li>
            <li class="contactus"><a id="menu_contactus"  href="contactUs.php">Contact us</a></li>
        </ul>
    </div>
</nav>
<!-- Navbar Ends-->`)

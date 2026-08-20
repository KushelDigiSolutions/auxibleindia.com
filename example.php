<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<style>
    .flex-home{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .flex-home p{
        padding: 0 15px;
    }
    .about{
        display: none;
    }
    .service{
        display: none;
    }
</style>
<body>
    <div class="main">
     <div class="flex-home">
        <p id="hi">Home</p>
        <P id="pi">About</P>
        <p id="ti" >Service</p>
     </div>
      <div id="hom" class="home">
        <h2>Hi Home</h2>
        <p>Ghar ja raha hu</p>
      </div>
      <div id="ab" class="about">
        <h2>Hi About</h2>
        <p>Tumhare bare mai jana chahta hu.</p>
      </div>
      <div id="se" class="service">
        <h2>Hi Service</h2>
        <p>services kya hai.</p>
      </div>
    </div>
</body>
<script>
  let hi = document.getElementById("hi");
  let pi = document.getElementById("pi");
  let ti = document.getElementById("ti");
  let hom = document.getElementById("hom");
  let ab = document.getElementById("ab");
  let se = document.getElementById("se");
  hi.addEventListener("click",(e)=>{
    hom.style.display="block";
    ab.style.display="none"
    se.style.display="none";
  })
  pi.addEventListener("click",(e)=>{
      hom.style.display="none";
      ab.style.display="block";
      se.style.display="none";
  })
  ti.addEventListener("click",(e)=>{
    se.style.display="block";
    hom.style.display="none";
    ab.style.display="none";
  })
</script>
</html>
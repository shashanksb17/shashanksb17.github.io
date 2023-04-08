window.onscroll = function() {myFunction()};
    
    var navbar = document.getElementById("nav-menu");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

    function resume(){
      window.open("https://drive.google.com/file/d/11_-r_h6_JgUhM2Dp9SmyMQJFasghLrMJ/view?usp=share_link","_blank")
    }


$(document).ready(function(){

      
      function toggleNav() {
      
          // Define targets
          var target = document.querySelector('.main');
          var button = document.querySelector('.nav-button');
          
          // click-touch event
          if ( button ) {
            button.addEventListener('click',function (e) { 
              target.classList.toggle('is-opened'); 
              e.preventDefault();
            }, false );
          }
      } // end toggleNav()
  
      toggleNav();
    });
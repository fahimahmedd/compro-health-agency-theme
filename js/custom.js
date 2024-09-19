$(function () {

  $(document).ready(function(){
    $(".search-Button").click(()=>{
      $('.searchBar').toggleClass('serachNewClass')
    })
  });
  
  $(document).ready(function(){
    $(".closebtn").click(()=>{
       $('.searchBar').toggleClass('serachNewClass')
      $('.serachNewClass').addClass('serachNewClass2')
    })
  });


  // Header Fixed
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

// Back To Top Button
var btn = $('#back-to-top');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

  
});


// Aos Animation
AOS.init();

$(document).ready(function() {
  $('.nav-right .nav-link').click(function() {
    var targetId = $(this).attr('href');
    var targetPosition = $(targetId).offset().top;
    var duration = 50;
    var navbarHeight = $('.nav-container').outerHeight();
    $('html, body').stop().animate({
      scrollTop: targetPosition - navbarHeight
    }, duration);
  })
});


$(window).on('scroll', function() {
  if($(window).scrollTop()) {
    $('.article-nav-bg').addClass('sm');
  } else {
    $('.article-nav-bg').removeClass('sm')
  }
})


// $(document).scroll(function() {
//   var leftBottomPsition = $('.fixed-left-lg').offset().top + $('.fixed-left-lg').height();
//   var footerBorder = $('.footer').offset().top; 

//   console.log("leftBottomPsition" + leftBottomPsition)
//   console.log("footerBorder"+ footerBorder)
//   if (leftBottomPsition >= footerBorder - 200)
//     $('.fixed-left-lg').removeClass('fixed');

//   if (leftBottomPsition < footerBorder)
//     $('.fixed-left-lg').addClass('fixed'); // restore when you scroll up
// });

$(document).on("click", ".youtube-video-player", function(){ $(".a").click(); });


// HAMBURGER MENU JS
const navToggle = document.querySelector('.nav-toggle');
// const closeAfterClickSession = querySelector('.nav-link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// closeAfterClickSession.addEventListener('click', () =>{
//   document.removeClass('nav-open');
// });


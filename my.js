window.onresize = resizeev;

function resizeev() {

      if (window.matchMedia("(max-width: 1140px)").matches || window.location.pathname == '/allegens.html') {
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
      } else if (window.matchMedia("(max-width: 1900px)").matches && window.location.pathname == '/stores.html') {
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
    } else if (window.matchMedia("(max-width: 1900px)").matches && window.location.pathname == '/sustainability.html') {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }  else if (window.matchMedia("(max-width: 1900px)").matches && window.location.pathname == '/menu.html') {
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
  }else {
      window.scrollTo(0,0);
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
  };

  $(document).ready(function(){
    $('#myCarousel').height($(window).height() - $('#navi').height());
    $('#img1').height($(window).height() - $('#navi').height());
    $('#img2').height($(window).height() - $('#navi').height());
    $('#img3').height($(window).height() - $('#navi').height());
    $('#img4').height($(window).height() - $('#navi').height());
    $('#myCarouselm').height($(window).height() - $('#navi').height());
    $('#img1m').height($(window).height() - $('#navi').height());
    $('#img2m').height($(window).height() - $('#navi').height());
    $('#img3m').height($(window).height() - $('#navi').height());
    $('#img4m').height($(window).height() - $('#navi').height());
     jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000  // 2 seconds
    });
  $( window ).on( "load", function() {
    $('#myCarousel').height($(window).height() - $('#navi').height());
    $('#img1').height($(window).height() - $('#navi').height());
    $('#img2').height($(window).height() - $('#navi').height());
    $('#img3').height($(window).height() - $('#navi').height());
    $('#img4').height($(window).height() - $('#navi').height());
    $('#myCarouselm').height($(window).height() - $('#navi').height());
    $('#img1m').height($(window).height() - $('#navi').height());
    $('#img2m').height($(window).height() - $('#navi').height());
    $('#img3m').height($(window).height() - $('#navi').height());
    $('#img4m').height($(window).height() - $('#navi').height());
  });

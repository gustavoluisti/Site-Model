/*========================================================
                    SERVICES SPARTAN
==========================================================*/
$(function() {

    // animando on scroll
    new WOW().init();
});

/*========================================================
                    WORK SPARTAN
==========================================================*/

$(function() {

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        }
    });
});
/*========================================================
                    TEAM SPARTAN
==========================================================*/
$(document).ready(function(){
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
  });
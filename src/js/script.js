$(document).ready(function() {
    $(".slick-carousel").slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '15px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '15px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay:true,
        autoplayTimeout:2000,
        loop:true
    })

    $(".slick-slide").click(function(){
        $(".slick-carousel").slick('slickGoTo', $(this).attr("data-slick-index"),true);
    })


});

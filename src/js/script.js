$(document).ready(function() {
    $(".slick-carousel").slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        responsive: [{
                breakpoint: 800,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '15px',
                    slidesToShow: 3,
                    infinite: true
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
        items: 1
    })

    $(".slick-slide").click(function(){
        $(".slick-carousel").slick('slickGoTo', $(this).attr("data-slick-index"),true);
    })


});

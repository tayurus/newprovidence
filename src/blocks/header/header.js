$(".header__hamburger").click(function () {
    $(".header, .header__submenu-wrapper").toggleClass("header_color_open");
    $(this).toggleClass("header__hamburger_open")
    $(".header__submenu-wrapper").toggle(300);
    $(".header__inner").toggleClass("header__inner_mobile");
})

$(window).scroll(function(){
    if ($(window).scrollTop() > 0)
        $(".header").addClass("header_scrolled")
    else
        $(".header").removeClass("header_scrolled")

})

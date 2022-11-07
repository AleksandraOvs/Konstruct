$(document).ready(function(){
    $('.burger').click(function(event){
        $('.header__nav__list, .header__nav__wrapper, .burger').toggleClass('active')
     });
    var $menu = $(".header__nav");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 900 && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 900 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });//scroll
function getScrollPercentage() {
        /*   
            $(window).scrollTop() - прокрученное расстояние от начала страницы до верхнего края окна браузера
            $(window).height() - высота окна браузера
            $(document).height() - высота страницы
        */
        return (($(window).scrollTop() / ($(document).height() - $(window).height())) * 100);
    }
    var scrollEvent = false; 
    $(function() {

        $(window).on("scroll", function() {
            if(!scrollEvent && getScrollPercentage() > 25) {
                $(".our-story-section__col__list-image__item").addClass("active");
            }
            if(!scrollEvent && getScrollPercentage() > 80) {
                $(".want-build").addClass("want-biuld-scroll");
            }
        });
    })
});

    





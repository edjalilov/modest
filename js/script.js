    $(window).scroll(function () {
        let scroll = $(this).scrollTop();
        if (scroll > 500) {
            $('.scroll-btn').fadeIn();
        } else {
            $('.scroll-btn').fadeOut();
        }
    })

    $('.scroll-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000)
    })

    let links = $('.menu__link');
    links.click(function (e) {
        e.preventDefault();
        links.removeClass('active');
        let menuHeight = $('.menu__link').innerHeight();
        let id = $(this).addClass('active').attr('href');
        let target = $(id).offset().top - menuHeight - 30;


        $('html').animate({
            scrollTop: target
        }, )
    })

    $(window).scroll(function () {
        let scroll = $(this).scrollTop();
        links.each(function () {
            let attr = $(this).attr('href');
            let position = $(attr).offset().top - 130;
            if (scroll >= position) {
                links.removeClass('active');
                $(this).addClass('active');
            }
        })
    });
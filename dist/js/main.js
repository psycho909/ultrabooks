var ultrabooks_data = {
    suggest: [],
    suggest2: [],
    suggest3: []
}
for (var i = 1; i <= 18; i++) {
    ultrabooks_data.suggest.push(i)
}
for (var i = 1; i <= 36; i++) {
    ultrabooks_data.suggest2.push(i)
}
for (var i = 1; i <= 5; i++) {
    ultrabooks_data.suggest3.push(i)
}
var templateHTML = $('#items-temp').html();
var template = Handlebars.compile(templateHTML)
var html = template(ultrabooks_data)
$('#items-wrap').html(html)

setTimeout(function () {
    $('.slogan').addClass('active')
}, 500)
setTimeout(function () {
    $('.slogan2').addClass('active')
}, 800)
setTimeout(function () {
    $('.slogan3').addClass('active')
}, 800)


var menuToggle=true;
$('.menu').on('click',function(){
    var li_length=($('.menu-box li').outerHeight(true))*($('.menu-box li').length);
    console.log(li_length)
    if(menuToggle){
        $('.menu-box').css('height',li_length+"px")
        menuToggle=!menuToggle
    }else{
        $('.menu-box').css('height',"0px")
        menuToggle=!menuToggle
    }
})

$('a.menu').on('click', function (e) {
    var type = $(this).attr('data-type')
    // e.preventDefault()
    if ($(window).width() > 576) {
        $('body,html').animate({
            scrollTop: $("#" + type).offset().top - 63
        }, 500)
    } else {
        $('body,html').animate({
            scrollTop: $("#" + type).offset().top - 100
        }, 500)

    }
})

$('.top').on('click', function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500)
})

var items_wrap_arr=[];

$('.fix-menu-btn').on('click',function(){
    if(items_wrap_arr.length){

    }else{
        $('.ultrabooks-container').each(function(){
            items_wrap_arr.push({
                type:$(this).attr('data-type'),
                top:$(this).offset().top
            })
        })
    }
    
    var data_type=$(this).attr('data-type');
    $('html,body').animate({
        scrollTop:$('.ultrabooks-container[data-type='+data_type+']').offset().top-60+'px'
    },400)
})

$(window).scroll(function (e) {
    if(items_wrap_arr.length){
        if($('.ultrabooks-container').eq(0).offset().top != items_wrap_arr[0].top){
            $('.ultrabooks-container').each(function(){
                items_wrap_arr.push({
                    type:$(this).attr('data-type'),
                    top:$(this).offset().top
                })
            })
            // console.log(1)
        }
    }else{
        $('.ultrabooks-container').each(function(){
            items_wrap_arr.push({
                type:$(this).attr('data-type'),
                top:$(this).offset().top
            })
        })
        // console.log(2)
    }
    for(var i=0;i<items_wrap_arr.length;i++){
        if($(window).scrollTop() >= items_wrap_arr[i].top-100){
            $('.fix-menu ul li[data-type='+items_wrap_arr[i].type+']').addClass('active')
            $('.fix-menu ul li').not($('.fix-menu ul li[data-type='+items_wrap_arr[i].type+']')).removeClass('active')
        }
    }

    if ($(window).width() > 576) {
        if ($(document).scrollTop() > 700) {
            $('.to-top').addClass('active')
        } else {
            $('.to-top').removeClass('active')
        }
    } else {
        if ($(document).scrollTop() > 400) {
            $('.to-top').addClass('active')
        } else {
            $('.to-top').removeClass('active')
        }
    }
    if($(document).scrollTop() > $('.ultrabooks-container').eq(0).offset().top-200){
        $('.fix-menu').addClass('showIn')
    }else{
        $('.fix-menu').removeClass('showIn')
    }

})
$(window).resize(function () {
    if(!menuToggle){
        $('.menu-box').css('height',"0px")
        menuToggle=!menuToggle
    }
})
var discount_swiper = new Swiper('.discount-swiper-container', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    navigation: {
        nextEl: '.discount-next',
        prevEl: '.discount-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        },
        576: {
            slidesPerView: 2
        }
    }
})
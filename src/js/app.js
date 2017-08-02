"use strict";
import $ from 'jquery'
import  { SmoothScroll }  from './modules/SmoothScroll';

let centerContent = () => {
    let height;

    height = $('*[class*="__content"]').height();
    console.log(parseInt(height / 2));
    $('*[class*="__content"]').css('margin-top', parseInt(height / 2) * -1);
};

$(document).ready(function(){
    centerContent();

    let scroll =  new SmoothScroll({
        animationDelay: 500,
        animationTime: 1000
    });

    $('.fixed-header__button').click( (event) => {
        $(event.currentTarget).toggleClass('on');
        if ($(window).width() < 771) {
            $('.fixed-header__menu, .fixed-header').toggleClass('on');
        }
        return false;
    });

    $('.page-2__slider.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            800: {
                items:3,
                nav: false
            },
            1039:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

});

$(window).resize(centerContent);




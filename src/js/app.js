"use strict";
import $ from 'jquery'
import  { SmoothScroll }  from './modules/SmoothScroll';

let scroll =  new SmoothScroll({
    animationDelay: 500,
    animationTime: 1000
});

$('.fixed-header__button').click( (event) => {
    $(event.currentTarget).toggleClass("on");
    return false;
});

$(document).ready(function(){
    $('.page-2__slider.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
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
    })
});


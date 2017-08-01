"use strict";
import $ from 'jquery'
import  { SmoothScroll }  from './modules/SmoothScroll';
import  { Router } from './modules/Router';


let scroll =  new SmoothScroll({
    animationDelay: 500,
    animationTime: 1000
});

$('.fixed-header__button').click( (event) => {
    $(event.currentTarget).toggleClass("on");
    return false;
});







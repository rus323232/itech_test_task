"use strict";
import $ from 'jquery'
import { PageTransform } from './modules/PageTransform';
import  { SmoothScroll }  from './modules/SmoothScroll';

$(document).ready(function(){
    let scroll =  new SmoothScroll({
        animationDelay: 500,
        animationTime: 1000
    }).init();

    let pageTransform = new PageTransform().init();
});

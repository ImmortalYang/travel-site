import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

$(document).ready(function(){
	var mobileMenu = new MobileMenu();
	new RevealOnScroll("feature-item", "85%");
	new RevealOnScroll("testimonial", "60%");
});

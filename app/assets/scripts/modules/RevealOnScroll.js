import $ from 'jquery';
import Waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
	constructor(className, offsetVal){
		this.className = className;
		this.offsetVal = offsetVal;
		this.itemsToReveal = $("." + this.className);
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints(){
		var revealOnScrollInstance = this;
		this.itemsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function(){
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: revealOnScrollInstance.offsetVal
			});
		});
	}
}

export default RevealOnScroll;
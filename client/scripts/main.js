'use strict';

console.log('Welcome to Yeogurt!');


var APP = {};

$(document).ready(function (){
	var s = skrollr.init();
	
	var hideSlideEffects = new Waypoint({
		element: document.getElementById('filler'),
		handler: function (){
			var slideContainer = document.getElementById('side-slide-effects');
			slideContainer.classList.add('hidden');
		},
	});
	
	var phoneWaypoint = new Waypoint({
		element: document.getElementById('phone-container'),
		offset: '100%',
		handler: function (direction){
			if (direction === 'down'){
				this.element.classList.add('open');
			}else{
				this.element.classList.remove('open');
			}
		}
	});
	
	var androidWaypoint = new Waypoint({
		element: document.getElementById('android-container'),
		offset: '100%',
		handler: function (direction){
			if (direction === 'down'){
				this.element.classList.add('open');
			}else{
				this.element.classList.remove('open');
			}
		}
	});
});


;(function($){
 $(document).ready(function(){
  		var $grid;
		$grid = $('.ba-portfolio__works').isotope({
		itemSelector: '.ba-grid-item ',
		 percentPosition: true,
		  	masonry: {
  		columnWidth: '.ba-grid-sizer'
  	}
	});
		$('.ba-team__filter-item').on('click', function(evt){
			evt.preventDefault();

			$('.ba-team__filter-item').removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');

			var filterVal = $(this).attr('data-filter');
  			$grid.isotope({ filter: filterVal });
		});

	$('.ba-slider').slick({
  	 'autoplay':true,
  	'autoplaySpeed': 4000,
	'speed': 4000,
	'dots': true,
	'arrow':false
  });

	$('.ba-slider__second').slick({
  	 'autoplay':true,
  	'autoplaySpeed': 4000,
	'speed': 4000,
	'dots': true,
	'arrow':false
  });
});

$(window).on('load', function(){
			  var map;
			  map = new google.maps.Map(
			  	document.getElementById('ba_map'), {
			  		center: {lat: 49.5685276, lng: 34.58543170000007},
			  		zoom: 16,
			  		disableDefaultUI: true
			  	});
			  var markerPoltava = new google.maps.Marker({
			position : {lat: 49.5685276, lng: 34.58543170000007},
			map : map,
			icon: '../img/favicon.png'
		});
		});
})(jQuery);

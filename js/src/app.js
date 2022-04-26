// @codekit-prepend "/bower_components/imagesloaded/imagesloaded.pkgd.min.js";
// @codekit-prepend "/bower_components/masonry-layout/dist/masonry.pkgd.min.js";

$(document).foundation();

// init Masonry Gallery after all images loaded
$('#masonryGrid').imagesLoaded( function() {
	$('#masonryGrid').masonry({
		itemSelector: '#masonryGrid .tile'
	});
});


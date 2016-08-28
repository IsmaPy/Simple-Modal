	var applyMapContainerHeight = function() {
		var height = $(document).height();
		$("#modal").height(height);
	};
	$(document).ready(function(){
		applyMapContainerHeight();
	});
	$(document).resize(function() {
		applyMapContainerHeight();
	});
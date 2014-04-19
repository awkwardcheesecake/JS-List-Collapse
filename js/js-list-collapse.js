$(document).ready(function(){
	// Failsafe. If they have javascript disabled, nothing will happen.
	// If they do have javascript, this will loop through and add the 
	// expand symbol element and toggle the headers closed.
	$(".jslc-clickHeader").each(function() {
		$(this).prepend('<span class="jslc-expandSymbol"></span> ');
		jslcToggleBlock(this);
	});

	// Adds the click functionality
    $(".jslc-clickHeader").click(function() {
		jslcToggleBlock(this);
	});
});

function jslcToggleBlock(clickHeader) {
		// Maybe kind of hacky, but eh, it works.
    	$(clickHeader).parent().children(".jslc-subBlock").toggle();
		
		// Boolean to check whether the sub block is visible or hidden
        var isActive = $(clickHeader).parent().children(".jslc-subBlock").is(":visible");
        
		// Changes the expand symbol based on whether a click will expand or collapse the sub block
        if (!isActive) {
            $(clickHeader).children(".jslc-expandSymbol").text("+");
        }
        else {
        	$(clickHeader).children(".jslc-expandSymbol").text("-");
        }
}
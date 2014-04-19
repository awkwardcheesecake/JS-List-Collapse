$(document).ready(function(){
	// add code to auto generate / set stuff here

    $(".jslc-clickHeader").click(function() {
		jslcToggleBlock(this)
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
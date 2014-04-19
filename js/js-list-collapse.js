$(document).ready(function(){
    $(".jslc-clickHeader").click(function () {
		// Maybe kind of hacky, but eh, it works.
    	$(this).parent().children(".jslc-subBlock").toggle();
		
		// Boolean to check whether the sub block is visible or hidden
        var isActive = $(this).parent().children(".jslc-subBlock").is(":visible");
        
		// Changes the expand symbol based on whether a click will expand or collapse the sub block
        if (!isActive) {
            $(this).children(".jslc-expandSymbol").text("+");
        }
        else {
        	$(this).children(".jslc-expandSymbol").text("-");
        }

    });
});
$(document).ready(function(){
    $(".jslc-clickHeader").click(function () {
    	$(this).parent().children(".jslc-subBlock").toggle();
        var isActive = $(this).parent().children(".jslc-subBlock").is(":visible");
        //$(".active").removeClass("active");
        
        if (!isActive) {
            $(this).children(".jslc-expandSymbol").text("+");
        }
        else {
        	$(this).children(".jslc-expandSymbol").text("-");
        }

    });
});
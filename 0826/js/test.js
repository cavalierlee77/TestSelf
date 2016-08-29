$(function(){
	function navFn() {
        var btns = $(".exlist").find("div");
        btns.bind({
            "click": function () {
                var spans = $(this).find("span");
                var targetLi = $(this).parent().next();
		        var n1 = 0;
			    var n2 = 0;
			    var n3 = 90;
                var truespans = $("div[transform=true]").find("span");
			    var expansionflag = eval(targetLi.attr("expansion"));

			    $("li[expansion]").attr("expansion", false);
                targetLi.attr("expansion", !expansionflag);
                $("li[expansion='false']").find("li").animate({"margin-top": "-24px"}, 200, "linear");
                $("li[expansion='true']").find("li").animate({"margin-top": "0px"}, 200, "linear");

                var cyctimer = setInterval(function () {
                    n1 = n1 + 3;
                    n2 = n2 + 4.5;
                    n3 = n3 + 4.5;
                    var spanparflag = targetLi.attr("expansion");
                    if (targetLi.attr("expansion") == "false") {
                    	spans.eq(0).css("transform", "rotate(" + n1 + "deg)");
                        spans.eq(1).css("transform", "rotate(" + n3 + "deg)");
                	}else {
                		spans.eq(0).css("transform", "rotate(" + n1 + "deg)");
                        spans.eq(1).css("transform", "rotate(" + n2 + "deg)");
                        truespans.eq(0).css("transform", "rotate(" + n1 + "deg)");
                        truespans.eq(1).css("transform", "rotate(" + n3 + "deg)");
                    }
                    if (n1 >= 180) {
                        truespans.eq(0).parent().attr("transform", false);
                        spans.eq(0).parent().attr("transform", spanparflag);
                        clearInterval(cyctimer);
                    }
                }, 1);
            }
        });
    }

    navFn();
});
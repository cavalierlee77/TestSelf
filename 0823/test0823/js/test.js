$(window).ready(function(){
	var str = "ajsdofglowfl";
	for(var chr of str){
		console.log(chr);
		if(chr === "g"){
			console.log("break");
			break;
		}
	}

	var inputs = $("input");
	for(var inp of inputs){
		console.log($(inp).val());
	}

	var oTure = $("input[att=true]");
	console.log(oTure.val());

	var each = function(ary, callback){
		for(var i = 0, l = ary.length; i < l; i++){
			callback.call(ary[i], i, ary[i]);
		}
	}

	each([1,3,4], function(i, n){
		console.log([i, n]);
	});

	var div1 = $("#div1");
	var div2 = $("#div2");
	var div3 = $("#div3");
	console.log(div1.attr("style"));
	console.log(div1.prop("style"));
	console.log(div1.css("top"));
	console.log(div2.css("position") === "static");
	console.log(div3.offset().top);
	console.log(div3.position().top);



	function customFunc() {
        var aDom = $("*");
        var customDoms = [];
        for (var i = 0, l = aDom.length; i < l; i++) {
            var dom = aDom.eq(i);
            if (dom.attr("customAttr")) {
                customDoms.push(dom);
            }
        }

        // 滚动条
        for (var i = 0, l = customDoms.length; i < l; i++) {
            (function (i) {
                var cScroll = customDoms[i];
                if(cScroll.attr("customAttr") === "scroll"){
                    customScroll(cScroll);
                }
            })(i);
        }
    }

    var customScrollFn = {
        createScroll: function(scroll){
            var $scroll = scroll;
            var $parent = $scroll.parent();
            if($parent.prop("tagName") !== "BODY" && $parent.css("position") === "static"){
                $parent.css("position", "relative");
            }
            var $wrap = $("<div>").appendTo($parent);
            $wrap.css({
                "position": $scroll.css("position"),
                "top": $scroll.position().top,
                "left": $scroll.position().left,
                "width": $scroll.outerWidth(),
                "height": $scroll.outerHeight(),
                "margin": $scroll.css("margin")
            });
            return $wrap;
        }
    };

    function customScroll(scroll) {
        var $scroll = scroll;
        var $wrap = customScrollFn.createScroll($scroll);
        console.log($wrap[0].style.cssText);
    }

    customFunc();

//     var name = "The Window";   
// 　　var object = {   
// 　　　　name : "My Object",   
// 　　　　getNameFunc : function(adds){   
// 　　　　　　console.log(adds); 
// 　　　　}   
// 	   };   
// 	   object.getNameFunc(3);
});
!function(e,i){function n(){i.winH=i.$win.height(),i.winW=i.$win.width(),i.$fullPages.height(i.winH)}e.extend(i,{$win:e(window),$doc:e(document),$body:e("body"),$htmlBody:e("html, body"),$fullPages:e(".fullscreen")});var o=function(){var n=e("#loader").delay(500).fadeOut("slow",function(){n.remove(),i.$win.trigger("loaderGone")})};i.$win.on("resize",function(){n(),i.$win.trigger("siteResized")}).on("load",function(){n(),o(),i.$win.trigger("siteLoaded")}).on("loaderGone",function(){i.$htmlBody.removeClass("ovf-hidden")}),n()}(jQuery,App);
if(function(){"use strict";var a,b=avm.require("cash"),c=avm.require("avast.web.platformSwitcher"),d=b(window),e=avm.require("avast.web.waypoints"),f=avm.require("avast.web.downloadPopup")(),g=avm.require("avast.detect")(),h=g.browser;c.init(),d.on("resize scroll",function(){e(b(".free-awards"),null,null,!0)?b(".sticky-bar").addClass("is-sticky"):b(".sticky-bar").removeClass("is-sticky")}),"en-au"==locale&&(a=f,a.init({popup:"#downloadPopup",openBtn:'a[data-behavior="downloadPopup-website-4187"][data-role="download-link"]',closeBtn:".js-dtp-close"})),(h.isChrome||h.isAvast||h.isEdgeChromium)&&(b("[data-browser]").css("display","none"),b('[data-browser="chrome"]').css("display","")),(h.isFirefox||h.isOpera||h.isSafari)&&(b("[data-browser]").css("display","none"),b('[data-browser="firefox"]').css("display","")),(h.isEdge||h.isInternetExplorer)&&(b("[data-browser]").css("display","none"),b('[data-browser="ie"]').css("display",""))}(),"ja-jp"==locale)var sliderInfFeatPriSm=tns({container:".slider-sliderInfFeatPriSm",controlsContainer:".slider-sliderInfFeatPriSm-controls",controlsPosition:"bottom",controls:!1,navPosition:"bottom",mouseDrag:!0,speed:400,fixedWidth:288,gutter:32,responsive:{576:{center:!0},768:{items:2,slideBy:2,center:!1},1280:{items:3,slideBy:3,controls:!0,fixedWidth:316}}});
!function(){"use strict";for(var a=avm.require("cash"),b=document.querySelectorAll(".modal"),c=document.querySelectorAll("iframe"),d=0;d<b.length;d++)b[d].addEventListener("hide.bs.modal",function(){var b=a(this).find(".modal-content"),c=b.find("iframe"),d=b.find("video")[0];0!==c.length?c[0].contentWindow.postMessage('{ "event":"command", "func":"pauseVideo", "args":"" }',"*"):d&&d.load()});for(var d=0;d<c.length;d++){var e=c[d];if(null!==e.getAttribute("link")&&/youtube-nocookie/.test(e.getAttribute("link")))if(/MSIE|Trident\//.test(window.navigator.userAgent)){var f=e.parentNode,g=e.getAttribute("link"),h=e.getAttribute("height"),i=e.getAttribute("width"),j=document.createElement("iframe");f.removeChild(e),j.setAttribute("src",g),j.setAttribute("width",i),j.setAttribute("height",h),f.appendChild(j)}else for(var k=document.querySelectorAll("[data-target*="+e.closest('[data-cmp-name="cmp-modal"]').getAttribute("id")+"]"),d=0;d<k.length;d++)!function(a){function b(){document.querySelector(a.getAttribute("data-target")+" iframe").contentDocument.querySelector("a").click(),a.removeEventListener("click",b,!0)}a.addEventListener("click",b,!0)}(k[d])}}();

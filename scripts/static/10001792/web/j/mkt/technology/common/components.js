"use strict";var Abreast={$el:$(".abreast"),scene:null,vars:function(){this.$contents=this.$el.find(".abreast__heading, .abreast__perex, .abreast__cta"),this.$bg=this.$el.find(".abreast__bg")},setParallaxTimeline:function(){this.parallaxTimeline=new TimelineMax,this.parallaxTimeline.staggerFromTo(this.$contents,1,{visibility:"visible",opacity:0,y:30},{opacity:1,y:0},.2,.4)},initHandler:function(){this.vars(),this.setParallaxTimeline(),this.scene=new ScrollMagic.Scene({triggerElement:this.$el[0],duration:this.$el.outerHeight()/3,triggerHook:.85}).setTween(this.parallaxTimeline).addTo(ScrollController.controller)}};w.autoHandle(Abreast);var Modal={_$currentModal:null,_currentName:null,_openClass:"modal--open",_callbacks:{opening:[],opened:[],closing:[],closed:[]},backdropFadeDuration:.5,initHandler:function(){var a=this;$(document).on("click",".modal__close, .modal",function(b){b.preventDefault(),a.close()}).on("click",".modal__content",function(a){return a.stopImmediatePropagation(),!1}).on("click","[data-modal]",function(b){a.open($(b.currentTarget).data("modal")),b.preventDefault()})},"keyboard[27]Handler":function(){this.close()},open:function(a){var b=this;if(null===this._$currentModal){var c=$("#modal-"+a);if(c.length){this._$currentModal=c,this._currentName=a,this._callbacks.opening.forEach(function(b){return b(a)}),this._$currentModal.addClass(this._openClass);(new TimelineMax).fromTo(this._$currentModal,this.backdropFadeDuration,{opacity:0},{opacity:1,onComplete:function(){b._callbacks.opened.forEach(function(b){return b(a)})}})}}},close:function(){var a=this;if(this._$currentModal){this._callbacks.closing.forEach(function(b){return b(a._currentName)});var b=this._$currentModal;new TimelineMax({onComplete:function(){b.removeClass(a._openClass),a._callbacks.closed.forEach(function(b){return b(a._currentName)})}}).fromTo(b,this.backdropFadeDuration,{opacity:1},{opacity:0}),this._$currentModal=null,this._currentName=null}},on:function(a,b){return this._callbacks[a]&&this._callbacks[a].push(b),this}};w.autoHandle(Modal);var ModalVideoAi={initHandler:function(){var a=new Plyr("#video-ai",{settings:[]}),b=!1;Modal.on("opened",function(c){b||"video-ai"!==c||(a.play(),b=!0)}).on("closing",function(b){"video-ai"===b&&a.pause()})}};w.autoHandle(ModalVideoAi);var EventHub={_callbacks:{},on:function(a,b){this._callbacks[a]||(this._callbacks[a]=[]),this._callbacks[a].push(b)},emit:function(a){var b=arguments;this._callbacks[a]&&this._callbacks[a].forEach(function(a){return a.apply(null,b)})}};

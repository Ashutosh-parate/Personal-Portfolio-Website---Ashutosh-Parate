!function(n){"use strict";n(window).on("load",(function(){var t=n(".preloader");pageTransition({target:document.querySelector(".page"),delay:0,duration:500,classActive:"animated",conditions:function(n,t){},onTransitionStart:function(n){setTimeout((function(){t.removeClass("loaded")}),.75*n.duration)},onReady:function(){t.addClass("loaded")}}),n("#selector").length&&n("#selector").animatedHeadline({animationType:"clip"})})),jQuery(document).ready((function(n){if(n(".cd-stretchy-nav").length>0){var t=n(".cd-stretchy-nav");t.each((function(){var t=n(this);t.find(".cd-nav-trigger").on("click",(function(n){n.preventDefault(),t.toggleClass("nav-is-visible")}))})),n(document).on("click",(function(e){!n(e.target).is(".cd-nav-trigger")&&!n(e.target).is(".cd-nav-trigger span")&&t.removeClass("nav-is-visible")}))}n("body.light.dark-header .cd-stretchy-nav ul li a").on("click",(function(){n(this).hasClass("home")?n(".cd-stretchy-nav").addClass("lighter"):n(".cd-stretchy-nav").removeClass("lighter")})),n(".link-portfolio-one").on("click",(function(t){var e=n(this).index()+3;n("#main > section.active").removeClass("active"),n("#main > section:nth-child("+e+")").addClass("active"),n(".stretchy-nav li:first-child").removeClass("active"),n(".stretchy-nav li:nth-child(2)").addClass("active"),t.preventDefault()})),n(".contactform").on("submit",(function(){n(".output_message").text("Loading...");var t=n(this);return n.ajax({url:t.attr("action"),method:t.attr("method"),data:t.serialize(),success:function(t){"success"==t?(n(".form-inputs").css("display","none"),n(".box p").css("display","none"),n(".contactform").find(".output_message").addClass("success"),n(".output_message").text("Message Sent!")):(n(".tabs-container").css("height","440px"),n(".contactform").find(".output_message").addClass("error"),n(".output_message").text("Error Sending!"))}}),!1})),n(".navigation > li, .stretchy-nav > li").on("click",(function(t){if(!n(this).hasClass("active")){var e=n(this).index()+2;n(".navigation > li.active, .stretchy-nav > li.active").removeClass("active"),n(this).addClass("active"),n("#main > section.active").removeClass("active"),n("#main > section:nth-child("+e+")").addClass("active"),n(".cd-stretchy-nav").removeClass("lighter-in-portfolio")}t.preventDefault()})),window.location.hash&&n("#link-"+window.location.hash.replace(/^#/,"")).length&&n("#link-"+window.location.hash.replace(/^#/,"")).trigger("click"),window.userInteractionTimeout=null,window.userInteractionInHTMLArea=!1,window.onBrowserHistoryButtonClicked=null,n(document).ready((function(){n(document).mousedown((function(){clearTimeout(window.userInteractionTimeout),window.userInteractionInHTMLArea=!0,window.userInteractionTimeout=setTimeout((function(){window.userInteractionInHTMLArea=!1}),500)})),n(document).keydown((function(){clearTimeout(window.userInteractionTimeout),window.userInteractionInHTMLArea=!0,window.userInteractionTimeout=setTimeout((function(){window.userInteractionInHTMLArea=!1}),500)})),window.history&&window.history.pushState&&n(window).on("popstate",(function(){window.userInteractionInHTMLArea||(window.location.hash&&n("#link-"+window.location.hash.replace(/^#/,"")).length&&n("#link-"+window.location.hash.replace(/^#/,"")).trigger("click"),window.location.hash||n("#link-work").trigger("click")),window.onBrowserHistoryButtonClicked&&window.onBrowserHistoryButtonClicked()}))}))})),n("#link-about").click((function(){n("#main").addClass("open")})),n("#link-contact").click((function(){n("#main").addClass("open")})),n("#back-mobile").click((function(){n("#main").removeClass("open")}))}(jQuery);
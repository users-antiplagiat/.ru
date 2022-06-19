$(document).ready((function(){function e(){var e=a.closest(".menu").find("nav");e.is(":visible")&&(e.hide(),a.closest(".menu").removeClass("up").addClass("down"))}function n(){var e=i.closest(".lang").find("nav");e.is(":visible")&&(e.hide(),i.closest(".lang").removeClass("up").addClass("down"))}function t(e,t){var o=new DialogHelper;if(0==a.length)$.ajax({type:"GET",url:"/lang/change?culture="+t,dataType:"json",timeout:6e4,success:function(e,n){e.success?window.location.reload():o.modalText($.localize("Failed to switch language ","~/js/common/menu.js"),null,null,"ap-header-dialog")},error:function(e,t,a){401==e.status?window.location.href="/":(n(),o.modalText($.localize("Failed to switch language ","~/js/common/menu.js"),null,null,"ap-header-dialog"))}});else{var i=[e.toString()];o.confirmText($.localize("Save language","~/js/common/menu.js"),$.localize("Set language {0} as default?","~/js/common/menu.js",i),(function(){var e=new DialogHelper;$.ajax({type:"PUT",url:"/api/profile/language?culture="+t,dataType:"json",contentType:"application/json; charset=utf-8",timeout:6e4,success:function(n,t){n.success?window.location.reload():e.modalText($.localize("Failed to switch language ","~/js/common/menu.js"),null,null,"ap-header-dialog")},error:function(t,o,a){401==t.status?window.location.href="/":(n(),e.modalText($.localize("Failed to switch language ","~/js/common/menu.js"),null,null,"ap-header-dialog"))}})}),$.localize("No","~/js/common/menu.js"),$.localize("Yes","~/js/common/menu.js"),null,(function(){var e=new DialogHelper;$.ajax({type:"GET",url:"/lang/change?culture="+t,dataType:"json",timeout:6e4,success:function(n,t){n.success?window.location.reload():e.modalText($.localize("Failed to switch language ","~/js/common/menu.js"),null,null,"ap-header-dialog")},error:function(t,o,a){401==t.status?window.location.href="/":(n(),e.modalText($.localize("Failed to switch language ","~/js/common/menu.js"),null,null,"ap-header-dialog"))}})}),"ap-header-dialog")}}function o(){var e=r.closest(".user-info-profile").find("nav");e.is(":visible")&&(e.hide(),r.removeClass("up").addClass("down"))}var a=$("#menu-system"),i=$("#lang"),r=$("#role");a.click((function(e){e.preventDefault(),e.stopPropagation();var t=$(this),a=t.closest(".menu").find("nav");a.is(":visible")?(a.hide(),t.closest(".menu").removeClass("up").addClass("down")):(n(),o(),a.show(),t.closest(".menu").addClass("up").removeClass("down"),setYMMainCounter("menu"),setGAMainCounter("menu_navigation","menu")),$(document).one("click",(function e(n){0===a.has(n.target).length||$(n.target).is("i.close")?(a.hide(),t.closest(".menu").removeClass("up").addClass("down")):$(document).one("click",e)}))})),$('.menu nav div a[href="/profile"]').click((function(e){setYMMainCounter("menu_profile"),setGAMainCounter("menu_navigation","menu_profile")})),$('.menu nav div a[href="/balance"]').click((function(e){setYMMainCounter("menu_balance"),setGAMainCounter("menu_navigation","menu_balance")})),$('.menu nav div a[href="/stat"]').click((function(e){setYMMainCounter("menu_stat"),setGAMainCounter("menu_navigation","menu_stat")})),$('.menu nav div a[href="/cabinet"]').click((function(e){setYMMainCounter("menu_cabinet"),setGAMainCounter("menu_navigation","menu_cabinet")})),$('.menu nav div a[href="/tariffs"]').click((function(e){setYMMainCounter("menu_tariff"),setGAMainCounter("menu_navigation","menu_tariff")})),$('.menu nav div a[href="/profile/techSupport"]').click((function(e){setYMMainCounter("menu_support"),setGAMainCounter("menu_navigation","menu_support")})),$('.menu nav div a[href="/profile/addUrl"]').click((function(e){setYMMainCounter("menu_addsite"),setGAMainCounter("menu_navigation","menu_addsite")})),$('.menu nav div a[href="/companyBilling"]').click((function(e){setYMCompanyBillingCounter("menu_billing"),setGACompanyBillingCounter("menu_navigation","menu_billing")})),i.click((function(n){n.preventDefault(),n.stopPropagation();var t=$(this),a=t.closest(".lang").find("nav");a.is(":visible")?(a.hide(),t.closest(".lang").removeClass("up").addClass("down")):(e(),o(),a.show(),t.closest(".lang").addClass("up").removeClass("down"),setYMMainCounter("lang"),setGAMainCounter("localization","lang")),$(document).one("click",(function e(n){0===a.has(n.target).length?(a.hide(),t.closest(".lang").removeClass("up").addClass("down")):$(document).one("click",e)}))})),$(".lang nav div a").click((function(e){e.preventDefault(),e.stopPropagation();var o=$(this),a=i.attr("data-culture"),r=o.attr("data-culture"),l=o.text();return setYMMainCounter("lang_"+l),setGAMainCounter("localization","lang_"+l),a==r?void n():void t(l,r)})),r.click((function(t){t.preventDefault(),t.stopPropagation();var o=$(this),a=o.closest(".user-info-profile").find("nav");a.is(":visible")?(a.hide(),o.removeClass("up").addClass("down")):(e(),n(),a.show(),o.addClass("up").removeClass("down")),$(document).one("click",(function e(n){0===a.has(n.target).length?(a.hide(),o.removeClass("up").addClass("down")):$(document).one("click",e)}))})),$(".user-info-profile nav div a").click((function(e){e.preventDefault(),e.stopPropagation();var n=$(this),t=r.attr("data-role"),a=n.attr("data-role");return n.text(),t==a?void o():void function(e){var n=new DialogHelper;$.ajax({type:"POST",url:"/account/changeRole?role="+e,dataType:"json",timeout:6e4,success:function(e,t){e.success?null!=e.url&&(window.location.href=e.url):n.modalText(e.message,null,null,"ap-header-dialog")},error:function(e,t,a){401==e.status?window.location.href="/":(o(),n.modalText($.localize("Failed to change role","~/js/common/menu.js"),null,null,"ap-header-dialog"))}})}(a)})),$(".user-info-tariff i.new").qtip({content:{text:function(e){return"<p>"+$(this).attr("title")+"</p>"}},style:{classes:"qtip-ux qtip-version ap-header-qtip",tip:{corner:"left top",mimic:"left center",width:12,offset:5}},position:{my:"left top",at:"right center",adjust:{y:-8,x:0}},show:{solo:!0,event:"click"},hide:{event:"click unfocus",fixed:!0},events:{show:function(e,n){setYMMainCounter("tariff_new"),setGAMainCounter("top_navigation","tariff_new")}}}),$(".general .header-inner .logo .ap").click((function(e){setYMMainCounter("ap_logo"),setGAMainCounter("top_navigation","ap_logo")})),$(".general .header-inner .partners .skolkovo").click((function(e){setYMMainCounter("skolkovo_logo"),setGAMainCounter("top_navigation","skolkovo_logo")})),$(".user-info-balance > a").click((function(e){setYMMainCounter("balance_payment"),setGAMainCounter("top_navigation","balance_payment")})),$('.user-info-tariff a[href$="/tariffs"]').click((function(e){setYMCabinetCounter("tariff")})),$(".user-info-tariff .tariff-edit > a").click((function(e){setYMMainCounter("tariff_change"),setGAMainCounter("top_navigation","tariff_change")})),$('.footer-menu .footer-menu-inner .footer-menu-nav a[href="/"]').click((function(e){setYMMainCounter("to_main"),setGAMainCounter("footer","to_main")})),$('.footer-menu .footer-menu-inner .footer-menu-nav a[href="/releases"]').click((function(e){setYMMainCounter("to_releases"),setGAMainCounter("footer","to_releases")})),$('.footer-menu .footer-menu-inner .footer-menu-nav a[href="/page/help"]').click((function(e){setYMMainCounter("to_help"),setGAMainCounter("footer","to_help")})),$('.footer-menu .footer-menu-inner .footer-menu-nav a[href="/page/contacts"]').click((function(e){setYMMainCounter("to_contact"),setGAMainCounter("footer","to_contact")})),$('.footer-law .footer-law-inner .footer-law-nav a[href="//entrypoint.ap-team.ru/corporate"]').click((function(e){setYMMainCounter("to_corp"),setGAMainCounter("footer","to_corp")})),$('.footer-law .footer-law-inner .footer-law-nav a[href$="/terms"]').click((function(e){setYMMainCounter("to_user_agreement"),setGAMainCounter("footer","to_user_agreement")})),$('.footer-law .footer-law-inner .footer-law-nav a[href$="/privacy"]').click((function(e){setYMMainCounter("to_personal_data_agreement"),setGAMainCounter("footer","to_personal_data_agreement")})),$(".social-link .facebook").click((function(e){setYMMainCounter("to_fb"),setGAMainCounter("footer","to_fb")})),$(".social-link .twitter").click((function(e){setYMMainCounter("to_twitter"),setGAMainCounter("footer","to_twitter")})),$(".social-link .youtube").click((function(e){setYMMainCounter("to_youtube"),setGAMainCounter("footer","to_youtube")})),$('.user-info-profile a[href$="/cabinet/startUpload"]').click((function(e){setYMMainCounter("user_check_document"),setGAMainCounter("top_navigation","user_check_document")})),$(".user-info-tariff .tariff-current > strong").click((function(e){setYMMainCounter("tariff_tariff"),setGAMainCounter("top_navigation","tariff_tariff")})),$(".user-info-tariff > h6").click((function(e){setYMMainCounter("tariff"),setGAMainCounter("top_navigation","tariff")})),$(".user-info-balance > h6").click((function(e){setYMMainCounter("balance"),setGAMainCounter("top_navigation","balance")})),$(window).resize((function(){$(".ap-header-dialog .ui-dialog-content").dialog("setposition")}))})),$(document).ready((function(){/(msie|trident)/i.test(navigator.userAgent)&&null==$.cookie("hideIE")&&function(){var e='<div class="accept-ie"><h2>'+$.localize("The Internet Explorer web browser is not supported","~/js/common/acceptIE.js")+"</h2><p>"+$.localize("You can continue your work, but web pages may be displayed incorrect. We recommend to install one of modern web browsers","~/js/common/acceptIE.js")+'</p><i class="close"></i></div>';$("body > .general").prepend(e),$(document).one("click",".accept-ie > .close",(function(){$.cookie("hideIE","1",{expires:3,path:"/"}),$(".accept-ie").remove()}))}()}));
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{264:function(e,t,n){"use strict";n.r(t);n(274);var i=n(286),r=n.n(i);var a="js-hidden",o="js-open";var u,c,s,l,d=n(53),m=n.n(d),h=n(269),b=n.n(h),f=n(78),p=n.n(f),v=n(282),g=n.n(v),y=n(270),k=n(302),x=n(275),w=n(277),I=(n(295),n(293)),O=n(300),j=n(266),S=n(288),_=n(289),A=n(301),E=n(278),T=864e5,L=document.getElementById("lead-form-step-1"),q=document.getElementById("lead-form-step-2"),B=document.getElementById("submit-success"),C=document.getElementById("lead-form-contact-footer"),G=document.getElementById("lead-form-back-btn"),P=j.a.experiments||{},N=10,F=".building-available",V=".building-unavailable",D=".consultation",M="Book A Tour Form",W="Waiting List Form",z="Book A Tour Availability";function H(){Object(x.c)(q,B,G),Object(x.d)(L,C),Object(y.e)({label:"BAT Form Back Button"})}function J(){s||(new A.a(q,be),s=!0),Object(x.c)(L,B,C),Object(x.d)(q,G,G)}function U(){Object(x.c)(L,q,C,G),G&&G.classList.add("disabled"),Object(x.d)(B)}function Y(){Object(x.d)(".submission-exception-message")}function Z(){Object(x.c)(".submission-exception-message")}function K(e){if(q){var t=Array.from(q.querySelectorAll(".desired-capacity"));t.length&&t.forEach(function(t){return t.textContent=e})}}function Q(e){return R.apply(this,arguments)}function R(){return(R=p()(m.a.mark(function e(t){var n,i,r,a,o,u,c,s,l,d,h,b;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.desiredCapacity,i=t.moveInDate,r=j.a.building,a=r.slug,o=r.id,u=Object(I.b)(i),c="min_capacity=".concat(n,"&available_date=").concat(u,"&geo_slug=").concat(a,"&q[]=").concat(o),s="".concat(j.a.apiProxyUrl,"/v1/availability?").concat(c),e.next=7,fetch(s);case 7:return l=e.sent,e.next=10,l.json();case 10:d=e.sent,h=d[o],e.t0=m.a.keys(h);case 13:if((e.t1=e.t0()).done){e.next=19;break}if(b=e.t1.value,!h[b].available){e.next=17;break}return e.abrupt("return",!0);case 17:e.next=13;break;case 19:return e.abrupt("return",!1);case 20:case"end":return e.stop()}},e)}))).apply(this,arguments)}function X(e){return Number.parseInt(e)>N}function $(e,t){var n=document.querySelector(e);n&&(t&&n.hasAttribute("required")||!t&&!n.hasAttribute("required")||(t?(n.setAttribute("required",""),n.setAttribute("aria-required","true")):(n.removeAttribute("required"),n.removeAttribute("aria-required"))))}function ee(e){$("#tour-date",e),$("#tour-times",e)}function te(){return ne.apply(this,arguments)}function ne(){return(ne=p()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=5;break}return e.next=3,me();case 3:se(),c=!0;case 5:Object(x.c)(D,V),Object(x.d)(F),ee(!0);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ie(e,t){return re.apply(this,arguments)}function re(){return(re=p()(m.a.mark(function e(t,n){var i;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u=n,K(i=n.desiredCapacity),!X(i)){e.next=8;break}Object(x.c)(F,V),Object(x.d)(D),ee(!1),u.experience="size over 10",e.next=18;break;case 8:return e.next=10,Q(n);case 10:if(!e.sent){e.next=16;break}return e.next=13,te();case 13:u.experience="available",e.next=18;break;case 16:Object(x.c)(D,F),Object(x.d)(V),ee(!1),u.experience="unavailable";case 18:J(),Object(y.e)({label:"Check Tour Availability",company_size:i,move_in_date:n.moveInDate,experience:u.experience});case 20:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ae(e,t){return oe.apply(this,arguments)}function oe(){return(oe=p()(m.a.mark(function e(t,n){var i,r,a,o,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=n,r=M,e.next=4,Object(I.a)(r);case 4:return a=e.sent,Z(),o=document.getElementById("gdpr-checkbox-lead-form").checked,ge(c=b()({},u,i,{marketing_consent:o})),ye(c,r),e.prev=10,e.next=13,Object(S.b)(Object(I.c)(c,a,j.a.building,2));case 13:U(),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(10),Object(k.b)("Lead form step two submit error",e.t0),Y();case 20:case"end":return e.stop()}},e,null,[[10,16]])}))).apply(this,arguments)}function ue(e,t){return ce.apply(this,arguments)}function ce(){return(ce=p()(m.a.mark(function e(t,n){var i,r,a,o,c,s,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Z(),i=j.a.building,!P.buildingPageFormAvailability||!i.is_tourable){e.next=13;break}return e.prev=3,e.next=6,ie(t,n);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),Object(k.b)("Lead form step one availability form submit error",e.t0),Y();case 12:return e.abrupt("return");case 13:return r=n,a=j.a.building.has_waitlist?W:z,e.next=17,Object(I.a)(a);case 17:return o=e.sent,i.has_waitlist?(s=document.getElementById("gdpr-checkbox-lead-form-1"),l=!s||s.checked,c=b()({},r,{marketing_consent:l})):c=r,u=c,ge(c),e.prev=21,e.next=24,Object(S.b)(Object(I.c)(c,o,j.a.building,1));case 24:ye(c,a),i.is_tourable?(K(c.desiredCapacity),pe(),J()):U(),e.next=32;break;case 28:e.prev=28,e.t1=e.catch(21),Object(k.b)("Lead form step one submit error",e.t1),Y();case 32:case"end":return e.stop()}},e,null,[[3,8],[21,28]])}))).apply(this,arguments)}function se(){l||(l=document.querySelector("#tour-times option").innerText)}function le(e){return de.apply(this,arguments)}function de(){return(de=p()(m.a.mark(function e(t){var n,i,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=document.getElementById("tour-times")).disabled=!0,e.next=4,Object(S.a)(j.a.building,t);case 4:i=e.sent,n.disabled=!1,(r=i.map(function(e){return'<option value="'.concat(e.time,'">').concat(e.time,"</option>")})).unshift('<option value="" disabled selected>'.concat(l,"</option>")),n.innerHTML=r.join("");case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function me(){return he.apply(this,arguments)}function he(){return(he=p()(m.a.mark(function e(){var t,i,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(22),n.e(11)]).then(n.bind(null,383));case 2:t=e.sent,i=t.init,r=document.getElementById("tour-date"),i({element:r,appendTo:document.getElementById("tour-date-wrapper")}),r.addEventListener("change",function(){le(r.value)});case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function be(e,t){return fe.apply(this,arguments)}function fe(){return(fe=p()(m.a.mark(function e(t,n){var i,r,a,o,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!P.buildingPageFormAvailability){e.next=2;break}return e.abrupt("return",ae(t,n));case 2:return i=n,r=M,e.next=6,Object(I.a)(r);case 6:return a=e.sent,Z(),o=document.getElementById("gdpr-checkbox-lead-form").checked,ge(c=b()({},u,i,{marketing_consent:o})),ye(c,r),e.prev=12,e.next=15,Object(S.b)(Object(I.c)(c,a,j.a.building,2));case 15:U(),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(12),Object(k.b)("Lead form step two submit error",e.t0),Y();case 22:case"end":return e.stop()}},e,null,[[12,18]])}))).apply(this,arguments)}function pe(){return ve.apply(this,arguments)}function ve(){return(ve=p()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me();case 2:se();case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ge(e){if(function(){var e=j.a.building.slug,t=w.c(e);if(t){var n=Number(t);return Date.now()-n<T}}()){e.notes?e.notes.includes("Virtual-Tour-WeWork.com")||(e.notes="".concat(e.notes,";\n").concat("Virtual-Tour-WeWork.com")):e.notes="Virtual-Tour-WeWork.com"}}function ye(e,t){var n=b()({},e,{hasVirtualTour:j.a.building&&j.a.building.has_virtual_tour});Object(_.a)(n,t)}var ke=n(317),xe=n.n(ke),we=n(273),Ie=n(276),Oe=n(316),je=n(310),Se=n(283),_e=n(267),Ae=n.n(_e),Ee=n(268),Te=n.n(Ee),Le=n(305),qe=n(284),Be={gap:8,perView:8,focusAt:0,bound:!0,keyboard:!1,peek:{before:0,after:50},dragThreshold:!1},Ce=function(){function e(t,n,i,r){Ae()(this,e);var a=b()({},Be,r);this.mainElement=document.querySelector(t),this.thumbnailsElement=document.querySelector(n),this.mainWeGlide=new Se.a(t,i),this.thumbnailsGlide=new Le.a(n,a),this.thumbnailsCount=this.thumbnailsElement.querySelectorAll(".glide__slide").length,this.thumbnailsFocusAt=Math.floor(this.thumbnailsPerView/2),this.handleThumbnailsMovement(),this.handleThumbnailClick()}return Te()(e,[{key:"handleThumbnailsMovement",value:function(){var e=this;this.mainGlide.on("run",function(t){e.thumbnailsCount>e.thumbnailsPerView&&(e.handleShouldMoveThumbnail(t),e.handleShouldGoToFirstImage(),e.handleShouldGoToLastImage()),e.changeActiveThumbnail()})}},{key:"handleShouldMoveThumbnail",value:function(e){if(this.shouldMoveThumbnails(e)){var t=this.mainGlide.index-this.thumbnailsFocusAt;t=this.makeSureIndexIsNotOutOfBounds(t),this.goToThumbnail(t)}}},{key:"shouldMoveThumbnails",value:function(e){var t=this.mainGlide.index>=this.thumbnailsFocusAt,n=this.mainGlide.index<=this.thumbnailsCount-this.thumbnailsFocusAt,i=t&&n,r="="===e.direction,a=i||r;return a}},{key:"makeSureIndexIsNotOutOfBounds",value:function(e){return e<0?0:this.mainGlide.index+this.thumbnailsFocusAt>=this.thumbnailsCount?this.thumbnailsCount-this.thumbnailsPerView:e}},{key:"handleShouldGoToFirstImage",value:function(){0===this.mainGlide.index&&this.goToThumbnail(0)}},{key:"handleShouldGoToLastImage",value:function(){if(this.mainGlide.index===this.thumbnailsCount-1){var e=this.thumbnailsCount-this.thumbnailsPerView;this.goToThumbnail(e)}}},{key:"changeActiveThumbnail",value:function(){this.thumbnailsElement.querySelector(".actual-active").classList.remove("actual-active"),this.thumbnailsElement.querySelectorAll(".glide__slide")[this.mainGlide.index].classList.add("actual-active")}},{key:"handleThumbnailClick",value:function(){var e=this;Array.from(this.thumbnailsElement.querySelectorAll(".glide__slide")).forEach(function(t,n){t.addEventListener("click",function(){e.mainGlide.go("="+n),Object(qe.a)(e.mainElement.dataset.name,n,"thumbnail")})})}},{key:"goToThumbnail",value:function(e){this.thumbnailsGlide.go("=".concat(e))}},{key:"mount",value:function(){this.mainGlide.mount(),this.thumbnailsGlide.mount()}},{key:"thumbnailsPerView",get:function(){return this.thumbnailsGlide.settings.perView}},{key:"mainGlide",get:function(){return this.mainWeGlide.glide}}]),e}(),Ge="#building-page-slider",Pe="#building-page-thumbnails-slider",Ne="#building-page-amenities-slider";function Fe(){var e;e={perView:j.a.building.has_virtual_tour?6:8},new Ce(Ge,Pe,{},e).mount(),function(){if(document.querySelector(Ne)){var e=new Se.a(Ne);e.mount()}}()}function Ve(e,t){var n=document.getElementById(e);n&&n.addEventListener("click",function(){Object(y.e)(t)})}(j.a.experiments||{}).isFormExperimentMarket&&Object(Oe.b)("buildingPageFormAvailability",{triggerHotjar:!0}),j.a.building&&j.a.building.has_virtual_tour&&Object(je.a)("buildingPage_virtual_tour"),void 0===r.a.get("we_referring_domain")&&r.a.set("we_referring_domain",document.referrer||"",{path:"/"}),Object(Ie.a)(),Object(we.a)(function(){var e,t,i,r,u,c,s;e=document.getElementById("building-map"),xe()(e,{loaded:(t=p()(m.a.mark(function e(){var t,i,r,a,o,u,c,s;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([n.e(3),n.e(27)]).then(n.bind(null,332));case 3:t=e.sent,i=t.default,r=t.BUILDING_PAGE_MAP,a=j.a.mapData,o=a[0],u=o.latitude,c=o.longitude,(s=new i({container:"building-map",center:{longitude:c,latitude:u},type:r,zoom:13,scrollZoom:!1,doubleClickZoom:!1,padding:{top:70,bottom:20,left:85,right:85}})).addPins(a),s.setPrimaryPin(0),s.setActivePin(0),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("Error loading building page map: ",e.t0);case 18:case"end":return e.stop()}},e,null,[[0,15]])})),function(){return t.apply(this,arguments)})}).observe(),["Office","HotDesk","DedicatedDesk","LabsDesk"].map(function(e){var t=document.querySelector("#dropdown-".concat(e)),n=document.querySelector("#dropdown-button-".concat(e)),i=document.querySelector("#more-".concat(e)),r=document.querySelector("#less-".concat(e));t&&n.addEventListener("click",function(){t.classList.toggle(o),i.classList.toggle(a),r.classList.toggle(a)})}),function(){G&&G.addEventListener("click",H);var e=L.querySelector("#phone")||q.querySelector("#phone");Object(O.a)(e,{appendToBodyInMobile:!1});var t=new A.a(L,ue),n=document.getElementById("capacity-number-stepper");new E.a(n,{onChange:function(){t.setInputValidity(this.input)}})}(),i=document.getElementById("open-form-modal"),r=document.getElementById("close-form-modal"),u=g()("#lead-form-container"),c=document.body.classList,i&&(i.addEventListener("click",function(){c.add("mobile-form-open"),c.add("js-lock-scroll"),u.activate()}),r.addEventListener("click",function(){c.remove("mobile-form-open"),c.remove("js-lock-scroll"),u.deactivate()})),s={event:"Building Data",market_uuid:j.a.market.id,building_uuid:j.a.building.id},Object(y.f)([s]),Fe(),Ve("signup-link",{label:"V2 building page product card sign up link"}),Ve("virtual-tour",{label:"virtual tour button"})})},277:function(e,t,n){"use strict";n.d(t,"f",function(){return l}),n.d(t,"c",function(){return d}),n.d(t,"b",function(){return m}),n.d(t,"e",function(){return h}),n.d(t,"a",function(){return b}),n.d(t,"d",function(){return f});var i=n(267),r=n.n(i),a=n(268),o=n.n(a),u=function(){function e(){r()(this,e)}return o()(e,null,[{key:"getItem",value:function(e){try{return localStorage.getItem(e)}catch(e){return console.error("Local Storage not available."),null}}},{key:"setItem",value:function(e,t){try{return localStorage.setItem(e,t)}catch(e){console.error("Local Storage not available.")}}}]),e}(),c=function(){function e(){r()(this,e)}return o()(e,null,[{key:"getItem",value:function(e){try{return sessionStorage.getItem(e)}catch(e){return console.error("Session Storage not available."),null}}},{key:"setItem",value:function(e,t){try{return sessionStorage.setItem(e,t)}catch(e){console.error("Session Storage not available.")}}}]),e}(),s=function(e){return"virtual-tour:".concat(e)},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),n=s(e);return c.setItem(n,t)},d=function(e){var t=s(e);return c.getItem(t)},m=function(){return u.getItem("location_id")},h=function(e){return u.setItem("location_id",e)},b=function(){return u.getItem("desired_capacity")},f=function(e){return u.setItem("desired_capacity",e)}},278:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var i=n(267),r=n.n(i),a=n(268),o=n.n(a),u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r()(this,e),this.onChange=n.onChange,this.element=t,t&&(this.input=this.element.querySelector("input"),this.createNumberStepper())}return o()(e,[{key:"handleChange",value:function(e){this.onChange&&"function"==typeof this.onChange&&this.onChange(e)}},{key:"createNumberStepper",value:function(){var e=this.element.querySelector("button.number-stepper-increase"),t=this.element.querySelector("button.number-stepper-decrease");e.addEventListener("click",this.incrementEvent.bind(this,!0,this.input),!1),t.addEventListener("click",this.incrementEvent.bind(this,!1,this.input),!1)}},{key:"incrementEvent",value:function(e,t,n){var i=Number(t.value),r=Number(t.min||Number.NEGATIVE_INFINITY),a=Number(t.max||Number.POSITIVE_INFINITY);n.preventDefault();var o=e?i+1:i-1;o>=r&&o<=a&&(t.value=o),this.handleChange(t.value)}}]),e}()},283:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var i,r=n(269),a=n.n(r),o=n(267),u=n.n(o),c=n(268),s=n.n(c),l=n(271),d=n.n(l),m=n(305),h=n(284),b=n(279),f=".slider__arrow-btn--left",p=".slider__arrow-btn--right",v={gap:24,breakpoints:(i={},d()(i,b.c.breakpointsInPixels.tablet,{gap:8}),d()(i,b.c.breakpointsInPixels.desktop,{gap:24}),i)},g=function(){function e(t,n){u()(this,e);var i=a()({},v,n);this.element=document.querySelector(t),this.glide=new m.a(t,i),this.previousArrow=this.element.querySelector(f),this.nextArrow=this.element.querySelector(p),this.hidePreviousArrowOnFirstSlide(),this.trackArrowsClickInteractions(),this.trackSwipeInteractions()}return s()(e,[{key:"hidePreviousArrowOnFirstSlide",value:function(){var e=this;this.previousArrow&&this.glide.on("move",function(t){0===t.movement?e.previousArrow.classList.add("hidden"):e.previousArrow.classList.remove("hidden")})}},{key:"trackArrowsClickInteractions",value:function(){var e=this;this.nextArrow&&this.nextArrow.addEventListener("click",function(){Object(h.a)(e.sliderName,e.glide.index+1,"arrow")}),this.previousArrow&&this.previousArrow.addEventListener("click",function(){Object(h.a)(e.sliderName,e.glide.index-1,"arrow")})}},{key:"trackSwipeInteractions",value:function(){var e=this;this.glide.on("swipe.end",function(){Object(h.a)(e.sliderName,e.glide.index,"swipe")})}},{key:"mount",value:function(){this.glide.mount()}},{key:"sliderName",get:function(){return this.element.dataset.name}}]),e}()},284:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(270),r=n(266);function a(e,t,n){var a={label:e,sliderImageIndex:t,sliderAction:n};r.a.building&&(a.hasVirtualTour=r.a.building.has_virtual_tour),Object(i.e)(a)}}}]);
//# sourceMappingURL=building-main.5f936d14f6de0265d8dc.chunk.js.map
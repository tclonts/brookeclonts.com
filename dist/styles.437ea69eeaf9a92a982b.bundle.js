webpackJsonp([1,2],{367:function(n,e,t){var o=t(636);"string"==typeof o&&(o=[[n.i,o,""]]);t(678)(o,{});o.locals&&(n.exports=o.locals)},636:function(n,e,t){e=n.exports=t(637)(),e.push([n.i,'p, span, button, input, li, a {\n  font-family: "Open Sans", Helvetica, arial, sans-serif;\n  color: #5D5C62;\n  font-weight: 300;\n  font-size: 14px; }\n\nh1, h2, h3, h4 {\n  font-family: "Medula One", "Times New Roman", serif;\n  color: #5D5C62;\n  font-weight: 300; }\n\na {\n  text-decoration: none;\n  color: #5D5C62; }\n\n.btn {\n  background-color: transparent;\n  border: solid 1px #5D5C62;\n  color: #5D5C62;\n  border-radius: 0;\n  outline: 0;\n  box-shadow: none;\n  padding: 10px 20px; }\n  .btn:hover {\n    background-color: #5D5C62;\n    color: #FEFFFF;\n    cursor: pointer; }\n  .btn:focus {\n    outline: 0; }\n\n@keyframes draw {\n  to {\n    stroke-dashoffset: 0; } }\n\napp-tattoo svg path {\n  fill-opacity: 0;\n  stroke-width: 3;\n  stroke-dasharray: 800;\n  stroke-dashoffset: 900;\n  animation-name: draw;\n  animation-duration: 5s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: linear; }\n\napp-tattoo svg .st0, app-tattoo svg .st1 {\n  stroke: #EFCFD2; }\n\napp-menu {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  vertical-align: middle;\n  width: 100%; }\n  app-menu.fixed {\n    position: fixed; }\n  app-menu .header-menu {\n    background: rgba(254, 255, 255, 0.85);\n    display: flex;\n    padding: 10px 0; }\n    app-menu .header-menu a {\n      color: #484B5A;\n      font-size: 20px;\n      padding: 5px 20px; }\n    app-menu .header-menu .logo-wrapper {\n      float: left; }\n      app-menu .header-menu .logo-wrapper a {\n        font-family: "Medula One", "Times New Roman", serif;\n        font-size: 20px;\n        letter-spacing: 2px; }\n        @media screen and (min-width: 768px) {\n          app-menu .header-menu .logo-wrapper a {\n            font-size: 38px; } }\n    app-menu .header-menu .links {\n      display: inline-flex;\n      margin-left: auto;\n      vertical-align: middle; }\n    app-menu .header-menu .mobile-icon {\n      height: 28px;\n      width: 28px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      margin-left: auto;\n      padding-right: 20px; }\n      app-menu .header-menu .mobile-icon:hover {\n        cursor: pointer; }\n      app-menu .header-menu .mobile-icon .menu-icon {\n        background: #484B5A;\n        display: block;\n        margin: 3px;\n        height: 3px;\n        width: 30px;\n        border-radius: 12px;\n        opacity: 1;\n        transform: rotate(0deg);\n        transform-origin: left center;\n        transition: .25s ease-in-out; }\n      app-menu .header-menu .mobile-icon.open .menu-icon:nth-child(1) {\n        transform: rotate(38deg);\n        width: 50px;\n        margin-left: 13px; }\n      app-menu .header-menu .mobile-icon.open .menu-icon:nth-child(1) {\n        transform: rotate(38deg);\n        width: 50px;\n        margin-left: 13px; }\n      app-menu .header-menu .mobile-icon.open .menu-icon:nth-child(3) {\n        transform: rotate(38deg);\n        width: 50px;\n        margin-left: 13px; }\n      app-menu .header-menu .mobile-icon.open .menu-icon:nth-child(1) {\n        transform: rotate(38deg);\n        width: 50px;\n        margin-left: 13px; }\n  app-menu .mobile-links {\n    background-color: #484B5A;\n    color: #FEFFFF;\n    display: block;\n    text-align: center;\n    font-size: 16px;\n    padding-top: 20px;\n    padding-bottom: 30px; }\n    app-menu .mobile-links .mobile-link {\n      padding: 10px 0; }\n      app-menu .mobile-links .mobile-link a {\n        color: #FEFFFF; }\n        app-menu .mobile-links .mobile-link a:hover {\n          color: #F5D0D7; }\n\napp-footer {\n  background-color: #484B5A;\n  color: #FEFFFF;\n  padding: 50px 20px;\n  display: block; }\n  @media screen and (min-width: 768px) {\n    app-footer {\n      display: flex; } }\n  app-footer .links {\n    display: block; }\n    app-footer .links:not(:last-child) {\n      margin-bottom: 10px; }\n  app-footer a {\n    color: #FEFFFF;\n    font-size: 16px;\n    line-height: 1.5; }\n    app-footer a:hover {\n      color: #F5D0D7; }\n\n.footer-section {\n  padding: 20px; }\n  @media screen and (min-width: 768px) {\n    .footer-section {\n      display: block; } }\n  .footer-section:not(:first-child) {\n    margin-top: 30px; }\n    @media screen and (min-width: 768px) {\n      .footer-section:not(:first-child) {\n        margin-left: 50px;\n        margin-top: 0; } }\n  .footer-section h3 {\n    color: #FEFFFF;\n    display: block;\n    font-size: 38px;\n    margin-bottom: 20px;\n    margin-top: 0; }\n  .footer-section form {\n    margin-right: 0;\n    max-width: 300px; }\n  .footer-section input {\n    border: solid 1px #FEFFFF;\n    border-radius: 0;\n    outline: none;\n    box-shadow: none;\n    color: #FEFFFF;\n    background-color: transparent;\n    width: 100%;\n    padding: 10px;\n    font-size: 16px; }\n    .footer-section input:not(:last-child) {\n      margin-bottom: 10px; }\n    .footer-section input:placeholder, .footer-section input::-webkit-input-placeholder, .footer-section input:-moz-placeholder {\n      color: #FEFFFF; }\n    .footer-section input:focus {\n      outline: none; }\n  .footer-section .invalid {\n    margin-bottom: 5px;\n    font-style: italic;\n    color: #FEFFFF; }\n  .footer-section .btn {\n    background-color: #F5D0D7;\n    color: #484B5A;\n    width: 100%; }\n    .footer-section .btn:hover {\n      background-color: #FEFFFF;\n      color: #484B5A; }\n\napp-message .message {\n  background-color: #FEFFFF;\n  position: fixed;\n  max-width: 300px;\n  padding: 20px; }\n\napp-message .close {\n  height: 20px;\n  width: 100%; }\n  app-message .close:hover {\n    cursor: pointer; }\n  app-message .close:before, app-message .close:after {\n    background-color: #B2B8B4;\n    border-radius: 13px;\n    content: \'\';\n    height: 1px;\n    position: absolute;\n    right: 20px;\n    top: 30px;\n    transform: rotate(0deg);\n    transition: transform 0.15s ease-in-out;\n    width: 25px; }\n    app-message .close:before:hover, app-message .close:after:hover {\n      cursor: pointer; }\n  app-message .close.x-close:before {\n    transform: rotate(40deg); }\n  app-message .close.x-close:after {\n    transform: rotate(-40deg); }\n\n.loader {\n  background-color: #484B5A;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: none;\n  text-align: center;\n  width: 100%;\n  z-index: 100;\n  height: 100vh;\n  width: 100vw;\n  transition: background-color 1s ease;\n  transition-delay: 0.5s; }\n  @media screen and (min-width: 768px) {\n    .loader {\n      display: table; } }\n  .loader app-tattoo, .loader svg {\n    height: 100%;\n    max-height: 100%;\n    width: auto; }\n  .loader app-tattoo {\n    display: table-cell;\n    vertical-align: middle;\n    margin: auto;\n    height: 280px;\n    width: 280px;\n    margin-top: -140px;\n    opacity: 1; }\n    @media screen and (min-width: 768px) {\n      .loader app-tattoo {\n        height: 600px;\n        width: 600px;\n        margin-top: -300px;\n        position: fixed;\n        top: 50%;\n        text-align: center;\n        left: 50%;\n        margin-left: -300px;\n        transition: all 0.5s ease; } }\n    @media screen and (min-width: 768px) {\n      .loader app-tattoo.fade {\n        opacity: 0; } }\n  .loader.fade {\n    background-color: rgba(72, 75, 90, 0);\n    pointer-events: none; }\n    @media screen and (min-width: 768px) {\n      .loader.fade app-tattoo {\n        height: 400px;\n        width: 400px;\n        margin-left: -200px; } }\n\napp-home h2 {\n  font-size: 38px;\n  margin-bottom: 20px;\n  letter-spacing: 2px; }\n\napp-home .hero-banner {\n  background-color: #484B5A;\n  height: 100vh;\n  width: 100vw;\n  text-align: center;\n  display: table;\n  padding: 160px 0 100px; }\n  app-home .hero-banner h1 {\n    color: #FEFFFF;\n    font-size: 38px;\n    margin-bottom: 30px;\n    letter-spacing: 2px; }\n    @media screen and (min-width: 768px) {\n      app-home .hero-banner h1 {\n        font-size: 58px; } }\n  app-home .hero-banner button.btn {\n    border: solid 1px #FEFFFF;\n    color: #FEFFFF;\n    font-size: 20px;\n    padding: 10px 50px; }\n    app-home .hero-banner button.btn:hover {\n      background-color: #FEFFFF;\n      color: #484B5A; }\n\napp-home .hero-content {\n  display: table-cell;\n  vertical-align: middle; }\n\napp-home app-tattoo, app-home svg {\n  display: block;\n  height: 200px;\n  width: 200px;\n  margin: auto;\n  text-align: center; }\n  @media screen and (min-width: 768px) {\n    app-home app-tattoo, app-home svg {\n      height: 400px;\n      width: 400px; } }\n\napp-home .products-section {\n  background-color: #B2B8B4;\n  display: table;\n  height: 100vh;\n  width: 100vw;\n  margin: auto;\n  text-align: center;\n  padding: 100px 0; }\n  app-home .products-section .products-wrapper {\n    display: table-cell;\n    vertical-align: middle; }\n  app-home .products-section .status-message {\n    color: #484B5A;\n    font-size: 20px; }\n\napp-about {\n  background-color: #FEFFFF;\n  padding: 0px 20px 100px;\n  text-align: center;\n  height: 100vh;\n  width: 100vw; }\n  app-about h1 {\n    font-size: 20px;\n    margin-bottom: 20px;\n    letter-spacing: 2px;\n    margin-top: 160px; }\n    @media screen and (min-width: 768px) {\n      app-about h1 {\n        font-size: 38px; } }\n  app-about p {\n    font-size: 14px;\n    line-height: 1.5;\n    margin: 0;\n    text-align: left; }\n    @media screen and (min-width: 768px) {\n      app-about p {\n        margin-left: 20px; } }\n  app-about p, app-about .img-wrapper {\n    display: block; }\n    @media screen and (min-width: 768px) {\n      app-about p, app-about .img-wrapper {\n        display: flex-inline; } }\n  app-about img {\n    max-width: 600px;\n    width: 100%; }\n  app-about .img-wrapper {\n    padding: 20px; }\n    @media screen and (min-width: 768px) {\n      app-about .img-wrapper {\n        padding: 0; } }\n  app-about .about-content {\n    max-width: 900px;\n    margin: auto;\n    padding: 20px; }\n    @media screen and (min-width: 768px) {\n      app-about .about-content {\n        display: flex;\n        padding: 0;\n        margin-top: 50px; } }\n\nbody, main {\n  margin: 0;\n  overflow-x: hidden; }\n\n@media screen and (min-width: 768px) {\n  .hide-tab-up {\n    display: none !important; } }\n\n@media screen and (max-width: 769px) {\n  .hide-tab-down {\n    display: none !important; } }\n',""])},637:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(o[i]=!0)}for(a=0;a<e.length;a++){var r=e[a];"number"==typeof r[0]&&o[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),n.push(r))}},n}},678:function(n,e){function t(n,e){for(var t=0;t<n.length;t++){var o=n[t],a=m[o.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(s(o.parts[i],e))}else{for(var r=[],i=0;i<o.parts.length;i++)r.push(s(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:r}}}}function o(n){for(var e=[],t={},o=0;o<n.length;o++){var a=n[o],i=a[0],r=a[1],p=a[2],s=a[3],d={css:r,media:p,sourceMap:s};t[i]?t[i].parts.push(d):e.push(t[i]={id:i,parts:[d]})}return e}function a(n,e){var t=f(),o=b[b.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),b.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function i(n){n.parentNode.removeChild(n);var e=b.indexOf(n);e>=0&&b.splice(e,1)}function r(n){var e=document.createElement("style");return e.type="text/css",a(n,e),e}function p(n){var e=document.createElement("link");return e.rel="stylesheet",a(n,e),e}function s(n,e){var t,o,a;if(e.singleton){var s=x++;t=g||(g=r(e)),o=d.bind(null,t,s,!1),a=d.bind(null,t,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=p(e),o=c.bind(null,t),a=function(){i(t),t.href&&URL.revokeObjectURL(t.href)}):(t=r(e),o=l.bind(null,t),a=function(){i(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else a()}}function d(n,e,t,o){var a=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=F(e,a);else{var i=document.createTextNode(a),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(i,r[e]):n.appendChild(i)}}function l(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function c(n,e){var t=e.css,o=e.sourceMap;o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([t],{type:"text/css"}),i=n.href;n.href=URL.createObjectURL(a),i&&URL.revokeObjectURL(i)}var m={},h=function(n){var e;return function(){return"undefined"==typeof e&&(e=n.apply(this,arguments)),e}},u=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,x=0,b=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=u()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var a=o(n);return t(a,e),function(n){for(var i=[],r=0;r<a.length;r++){var p=a[r],s=m[p.id];s.refs--,i.push(s)}if(n){var d=o(n);t(d,e)}for(var r=0;r<i.length;r++){var s=i[r];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete m[s.id]}}}};var F=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},681:function(n,e,t){n.exports=t(367)}},[681]);
/******/!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}// webpackBootstrap
/******/
var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){"use strict";var n=i(1),a=i(2),r=i(3),o=i(4),s=i(5),l=i(6),u=i(7),c=i(8),d=i(9);angular.module("deployTask",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","angular-carousel","ngDialog","youtube-embed"]).constant("malarkey",malarkey).constant("moment",moment).config(n.config).config(a.routerConfig).run(r.runBlock).service("githubContributor",l.GithubContributorService).service("webDevTec",u.WebDevTecService).service("MainService",s.MainService).controller("MainController",o.MainController).directive("acmeNavbar",c.NavbarDirective).directive("acmeMalarkey",d.MalarkeyDirective)},function(e,t){"use strict";function i(e,t){"ngInject";e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}i.$inject=["$logProvider","toastrConfig"],Object.defineProperty(t,"__esModule",{value:!0}),t.config=i},function(e,t){"use strict";function i(e,t){"ngInject";e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}),t.otherwise("/")}i.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=i},function(e,t){"use strict";function i(e){"ngInject";e.debug("runBlock end")}i.$inject=["$log"],Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=i},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function(){function e(t,n,a,r){"ngInject";i(this,e),this.MainService=t,this.ngDialog=r,this.$log=a,this.$scope=n,this.activate()}return e.$inject=["MainService","$scope","$log","ngDialog"],n(e,[{key:"activate",value:function(){var e=this;this.MainService.getMediaSources().then(function(t){e.mediaSources=t})}},{key:"clickPlaceholder",value:function(){this.$log.info("Field clicked")}},{key:"openVideo",value:function(e){this.$scope.videoSrc=e.videoSrc,this.$scope.playerVars={controls:0,autoplay:1},this.ngDialog.open({template:"videoModal",scope:this.$scope})}}]),e}();t.MainController=a},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function(){function e(t,n){"ngInject";i(this,e),this.$log=t,this.$http=n,this.jsonAssetsURL="/assets/json/"}return e.$inject=["$log","$http"],n(e,[{key:"getMediaSources",value:function(){var e=this;return this.$http.get(this.jsonAssetsURL+"mediaSources.json").then(function(e){return e.data})["catch"](function(t){e.$log.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))})}}]),e}();t.MainService=a},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function(){function e(t,n){"ngInject";i(this,e),this.$log=t,this.$http=n,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return e.$inject=["$log","$http"],n(e,[{key:"getContributors",value:function(e){var t=this;return e||(e=30),this.$http.get(this.apiHost+"/contributors?per_page="+e).then(function(e){return e.data})["catch"](function(e){t.$log.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))})}}]),e}();t.GithubContributorService=a},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function(){function e(){"ngInject";i(this,e),this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"ES6 (Babel formerly 6to5)",url:"https://babeljs.io/",description:"Turns ES6+ code into vanilla ES5, so you can use next generation features today.",logo:"babel.png"}]}return n(e,[{key:"getTec",value:function(){return this.data}}]),e}();t.WebDevTecService=a},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){"ngInject";var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0}),t.NavbarDirective=n;var a=function r(){"ngInject";i(this,r);var e=this;e.isOpen=!0}},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e){"ngInject";function t(t,i,n,a){var r=void 0,o=e(i[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});i.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){o.type(e).pause()["delete"]()}),r=t.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(e){o.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){r()})}var i={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:r,controllerAs:"vm"};return i}n.$inject=["malarkey"],Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();t.MalarkeyDirective=n;var r=function(){function e(t,n){"ngInject";i(this,e),this.$log=t,this.contributors=[],this.activate(n)}return e.$inject=["$log","githubContributor"],a(e,[{key:"activate",value:function(e){var t=this;return this.getContributors(e).then(function(){t.$log.info("Activated Contributors View")})}},{key:"getContributors",value:function(e){var t=this;return e.getContributors(10).then(function(e){return t.contributors=e,t.contributors})}}]),e}()}]),angular.module("deployTask").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div class="custom-navbar"><acme-navbar></acme-navbar></div><div class="row cyan" ng-click="vm.clickPlaceholder()"><div class="row title"><div class="col-md-9 col-sm-9 col-xs-9"><span>Claritas est etiam processus dynamicys, qui.</span></div></div><div class="row sub-title"><div class="col-md-9 col-sm-9 col-xs-9"><span class="gray">Eodem modo typi</span></div><div class="col-md-3 col-sm-3 col-xs-3"><span class="glyphicon glyphicon-chevron-right"></span></div></div></div><div class="row black"><div class="col-md-9 col-sm-9 col-xs-9"><span>Lorem impsum dolomet</span></div><div class="col-md-3 col-sm-3 col-xs-3 magenta" ng-click="vm.clickPlaceholder()"><span class="glyphicon glyphicon-chevron-right"></span></div></div><div class="row gallery"><div class="hidden-xs"><div class="col-md-4 col-lg-4 col-sm-4" ng-repeat="src in vm.mediaSources | orderBy:\'rank\'"><div ng-class="src.mediaType"><div class="overlay" ng-if="src.mediaType===\'video\'" ng-click="vm.openVideo(src)"><span class="glyphicon glyphicon-play-circle"></span></div><img src="" ng-src="{{src.thumbSrc}}" alt=""></div></div></div><div class="visible-xs"><ul rn-carousel="" rn-carousel-index="vm.carouselIndex" class="image"><li ng-repeat="src in vm.mediaSources | orderBy:\'rank\'"><div class="layer"><div ng-class="src.mediaType"><div class="overlay" ng-if="src.mediaType===\'video\'"><span class="glyphicon glyphicon-play-circle" ng-click="vm.openVideo(src)"></span></div><img src="" ng-src="{{src.thumbSrc}}" alt=""></div></div></li></ul><div rn-carousel-indicators="" slides="vm.mediaSources" class="indicators" rn-carousel-index="vm.carouselIndex"></div></div></div><div class="row text"><div class="col-md-12"><h2>Eodem modi typi</h2></div><div class="col-md-6 col-sm-12"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices ex finibus felis posuere, id lobortis mi tempor. Phasellus imperdiet libero non lectus eleifend facilisis. Curabitur eros dui, vehicula et risus bibendum, luctus fermentum lorem. Quisque viverra, orci non laoreet porta, purus sapien euismod diam, ut mattis nisi metus vitae quam. Donec sollicitudin hendrerit porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non sollicitudin leo, feugiat malesuada neque. Cras auctor felis at nunc posuere tempus in non odio.</p><p>Duis iaculis massa magna, eget consectetur enim tempor sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse ut odio a neque gravida maximus non a leo. Nam non diam dignissim, pharetra ipsum nec, elementum eros. Praesent eget mi faucibus risus porttitor efficitur. Quisque vitae rutrum felis, vulputate luctus ipsum. Nam leo velit, lobortis facilisis magna eleifend, vehicula varius nibh.</p><p>Mauris quis vehicula ante, ut maximus dui. Sed blandit ullamcorper cursus. In vehicula nec quam non bibendum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed elementum nisl eu lacus eleifend dapibus. Proin sodales, tortor id blandit dapibus, eros nisi suscipit nulla, id vestibulum erat nulla ac diam. Etiam sit amet odio sagittis, tristique quam tincidunt, placerat mauris.</p></div><div class="col-md-6 col-sm-12"><p>Nam ornare, diam sit amet ultrices vulputate, magna ante suscipit ligula, nec eleifend dolor nulla vitae diam. Suspendisse iaculis dictum quam, et tincidunt sem tempus eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vel nisi sollicitudin, vulputate augue at, lobortis tortor. Sed quis maximus magna, et mattis lectus. Mauris faucibus eleifend nisl, sit amet iaculis erat. Nullam felis erat, congue a condimentum ut, bibendum posuere eros. Cras condimentum tincidunt feugiat. Proin eu scelerisque ex. Integer commodo dui sed mi pellentesque gravida. Curabitur nec elit quam. Nulla massa urna, imperdiet vitae quam sed, viverra aliquet ligula. Maecenas molestie orci quis neque feugiat, porta malesuada nunc finibus. Duis ut libero laoreet, pulvinar nisl a, venenatis est. Vestibulum auctor lorem ut suscipit hendrerit. Nullam consectetur molestie sapien, ut sagittis risus iaculis sed.</p><p>Praesent convallis volutpat elit vel sodales. Curabitur blandit elit ac leo vestibulum fermentum. Nullam quis fermentum velit. Nullam tortor eros, viverra id eleifend vitae, pulvinar id enim. Vestibulum non accumsan magna. Nullam posuere magna quis neque feugiat, vel vestibulum velit feugiat. Morbi nec nisi a lectus dapibus malesuada vitae a sem. Nam dictum, tellus sit amet dictum placerat, erat nisi viverra mauris, ut consequat nulla leo quis ante. Morbi sed nisl id lorem faucibus bibendum non sed quam. Integer porta gravida elit, vehicula fringilla leo fermentum viverra.</p></div></div></div><script type="text/ng-template" id="videoModal"><youtube-video video-id="videoSrc" player-vars="playerVars"></youtube-video></script>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-default custom"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" ng-click="vm.isOpen=!vm.isOpen" aria-expanded="false"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand hidden-xs" ui-sref="home">PSD Websites</a> <a class="navbar-brand visible-xs" ui-sref="home">Navigate</a></div><div class="collapse navbar-collapse" collapse="vm.isOpen"><ul class="nav navbar-nav"><li><a ng-href="#">UI Kits</a></li><li><a ng-href="#">Premium PSD files</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Blog</a></li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-f20fc2d963.js.map

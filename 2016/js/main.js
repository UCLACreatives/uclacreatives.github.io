/**
 * Main AngularJS Web Application
 */
var app = angular.module('creativeLabsSPA', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
    // Pages
    .when("/process", {templateUrl: "partials/404.html", controller: "PageCtrl"})
    .when("/projects", {templateUrl: "partials/projects.html", controller: "PageCtrl"})
    .when("/team", {templateUrl: "partials/404.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/404.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
}]);

/**
 * Controls the Home
 */
app.controller('HomeCtrl', function ($scope/* $scope, $location, $http */) {
  var topPosition = $("#home .about").position().top;
  var personaPosition = $("#home .forWhom").position().top;
  var lastPersonaPosition = $("#home .developers").position().top + personaPosition + 100;
  console.log(lastPersonaPosition);
  var backgroundHeight = 587;
  var flag = 0;
  $(window).scroll(function(){
    if($("#home").width() > 768){
      if(flag == 1){
        flag = 0;
        $(".homePeople").css({
          position: "fixed",
          top: "100px"
        });
      }
      var scrollPosition = $(window).scrollTop();
      if(scrollPosition > lastPersonaPosition){
        $(".heroHeading h1").addClass("changed");
      }
      else if(scrollPosition > personaPosition){
        $(".persona").removeClass("intro");
        $(".heroHeading").css("position","fixed");
        $(".designers").css("margin-top","272px");
      }
      else{
       $(".heroHeading").css("position","relative");
       $(".designers").css("margin-top","100px");
      }
      if( scrollPosition < topPosition){
        var backgroundPosition = (scrollPosition/topPosition * backgroundHeight);
        var cssBackground = "center -" + backgroundPosition + "px";
        $(".homePeople").css("background-position",cssBackground);
      }
      else{
        if(flag == 0){
          var topFix = topPosition + 100 + "px";
          $(".homePeople").css({
            position: "absolute",
            top: topFix
          });
          flag = 1;
        }
      }
    }
  });
  console.log(topPosition);


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-84507511-1', 'auto');
  ga('send', 'pageview');
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");
});

/**
 * Controls navBar
 */
app.controller('NavCtrl', function ($scope, $location/* $scope, $location, $http */) {
  console.log("Nav Controller reporting for duty.");
  $scope.nav = false;
  if($location.url() != '/'){
          $scope.nav = true;
  }else{
      $scope.nav = false;
  }

  $scope.$on('$locationChangeSuccess', function () {
    console.log($location.url(), $scope.nav);
    if($location.url() != '/'){
            $scope.nav = true;
    }else{
        $scope.nav = false;
    }
  });

});

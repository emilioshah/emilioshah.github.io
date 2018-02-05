// script.js

// create the module and name it genericApp
// also include ngRoute for all our routing needs
var genericApp = angular.module('genericApp', ['ngRoute']);

// configure our routes
genericApp.config(function ($routeProvider) {
    $routeProvider
        //"ngPageTitle"

        // route for the home page
            .when('/', {
                
                //url: "/happy",
            templateUrl: 'pages/home.html',
            controller: 'mainController',
            title: 'Home | My Generic Site'
        })

        // route for the about page
            .when('/about', {
                
            templateUrl: 'pages/about.html',
            controller: 'aboutController',
            title: 'About Us | My Generic Site'
        })

        // route for the contact page
            .when('/contact', {
                
            templateUrl: 'pages/contact.html',
            controller: 'contactController',
            title: 'Contact Us | My Generic Site'
        })

        .when('/maps', {

            templateUrl: 'pages/maps.html',
            //controller: 'contactController',
            title: 'Maps | My Generic Site'
        })

        .when('/blog', {

            templateUrl: 'pages/blog.html',
            //controller: 'contactController',
            title: 'Blog | My Generic Site'
        })

            .when('/error', {

            templateUrl: 'pages/error.html',
            //controller: 'contactController',
            title: 'Oops...There is an Error'
        })

        .otherwise({ redirectTo: '/error' });
});

genericApp.run(['$location', '$rootScope', function ($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);

genericApp.controller('myMap', function ($scope) {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.206990, lng: -99.314956 },
        zoom: 4
    });
});

//genericApp.controller('myMap', function ($scope) {
//    var mapOptions = {
//        center: new google.maps.LatLng(39.206990, -99.314956),
//        zoom: 4,
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//    }
//    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//});




// create the controller and inject Angular's $scope
genericApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

genericApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

genericApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

genericApp.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 4000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    slides.push({ image: "../Content/Pics/dinner-theme-party-ideas-546f33c1eb065.jpg", text: "Dinner Parties" });
    slides.push({ image: "../Content/Pics/highres_263616572.jpeg", text: "New Mommy Get Togethers" });
    slides.push({ image: "../Content/Pics/happy-people.jpg", text: "Anything Is Possible With Friends" });


});

genericApp.controller('dateCtrl', function ($scope) {
    $scope.date = new Date();
});

//genericApp.controller('pageCtrl', function ($scope) {
//    var title = 'default';
//    return {
//        title: function () { return title; },
//        setTitle: function (newTitle) { title = newTitle }
//    };
//});

genericApp.run(['$location', '$rootScope', function ($location, $rootScope) {
    //$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    //    $rootScope.title = current.$$route.title;
    //});

    $rootScope.$on("$routeChangeSuccess", function (currentRoute, previousRoute) {
        //Change page title, based on Route information
        $rootScope.title = $route.current.title;
    });
}]);


//genericApp.controller('NavBarCtrl', function ($scope){

//    $scope.isCollapsed = true;
//});
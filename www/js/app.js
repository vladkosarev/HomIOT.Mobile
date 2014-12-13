/* HomIOT Mobile
 Allows to view data from HomIOT Server
 Make sure to change 
 Created Dec 13/2014 by Vlad Kosarev
 Source: https://github.com/vladkosarev/HomIOT.Mobile
 */

angular.module('starter', ['ionic', 'btford.socket-io'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }).
    factory('mySocket', function (socketFactory) {
        var myIoSocket = io.connect('http://192.168.0.21:9999'); // change the IP/port here to HomIOT server
        console.log(myIoSocket);
        var mySocket = socketFactory({
            ioSocket: myIoSocket
        });

        return mySocket;
    }).controller('MyCtrl', function ($scope, $http, mySocket) {
        $scope.events = [{timestamp: (new Date()).toLocaleString(), message: "Started..."}];
        mySocket.on('data', function (msg) {
            $scope.events.unshift({timestamp: (new Date()).toLocaleString(), message: msg});
            console.log(msg);
        });
    });

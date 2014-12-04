var app = angular.module('Aquaponic', ['ngRoute']);

app.controller('AppCtrl', function ($scope) {

  var socket = io.connect('http://'+ip+':8080');

    $scope.startFeeding = function(){
        var d = {"task":"startFeeding"};
        socket.emit("startFeeding", d);
    }

    $scope.stopFeeding = function(){
        var d = {"task":"stopFeeding"};
        socket.emit("stopFeeding", d);
    }

    $scope.startPump = function(){
        var d = {"task":"startPump"};
        socket.emit("startPump", d);
    }

    $scope.stopPump = function(){
        var d = {"task":"stopPump"};
        socket.emit("stopPump", d);
    }
});

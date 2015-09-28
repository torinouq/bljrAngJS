'use strict';

angular.module('psJwtApp')
  .controller('RegisterCtrl', function ($scope, $http, alert) {
    $scope.submit = function(){

    	var url = 'http://localhost:3000/register';
    	var user = {
            email: $scope.email,
            password: $scope.password
        };

    	$http.post(url, user)
    	.success(function(res) {
    		alert('success', 'Mantap!', 'Dah register, Bro');
    	})
    	.error(function(err) {
    		alert('warning', 'Wuadduh!', 'Ga bisa register nih, Bro');
    	});
    }
  });

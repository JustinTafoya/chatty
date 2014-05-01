'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
  	MessageService.getMessages()
  	.then(function(messages){

    $scope.messages = messages;
	})
  });

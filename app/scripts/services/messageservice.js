'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($http, $q) {
    return {
    	getMessages: function(){
    		var deferred = $q.defer()
    		$http.get('http://localhost:3000').success(function(data) {
    			deferred.resolve(data)
    		})
    		return deferred.promise
    	}
   	}
  });

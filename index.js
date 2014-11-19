var Q = require('q');

module.exports.InjectMagic = function(AWS){
	AWS.Request.prototype.then = function(thenCallback){
		var deferred = Q.defer();
		
		process.nextTick(function(){
			deferred.resolve({});
		});

		return deferred.promise.then(thenCallback);
	};
};
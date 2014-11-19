var Q = require('q');

module.exports.InjectMagic = function(AWS){
	AWS.Request.prototype.promise = function(promiseCallback){
		var deferred = Q.defer();

		this.
		on('success', function(response) {
			console.log('success');
			deferred.resolve(response);
		}).
		on('error', function(response) {
			console.log('reject');
			deferred.reject(response);
		}).
		send();

		return deferred.promise.then(promiseCallback);
	};

	AWS.Request.prototype.then = function(callback){
		return this.promise().then(callback);
	};

	AWS.Request.prototype.fail = function(callback){
		return this.promise().fail(callback);
	};
};
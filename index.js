var Q = require('q');

module.exports.InjectMagic = function(AWS){
	AWS.Request.prototype.then = function(thenCallback){
		var deferred = Q.defer();

		this.
		on('success', function(response) {
			console.log('success');
			deferred.resolve(response);
		}).
		send();

		return deferred.promise.then(thenCallback);
	};
};
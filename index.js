var Q = require('q');

module.exports.InjectMagic = function(AWS){
	AWS.Request.prototype.then = function(){
		var deferred = Q.defer();
		
		return deferred.promise;
	};
};
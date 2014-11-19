var expect = require("expect.js");
var AWS = require('aws-sdk');
var AwsQ = require("../index.js");

describe('entry point',function(){
	it('should inject/hack \'then\' into aws.response.prototype',function(){
		AwsQ.InjectMagic(AWS);

		expect(AWS.Request.prototype).to.have.property("then");
		expect(AWS.Request.prototype.then).to.be.a('function');

	});
});
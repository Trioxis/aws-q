var expect = require("expect.js");
var AwsQ = require("../index.js");
var AWS = require('aws-sdk');

before(function(){
	AwsQ.InjectMagic(AWS);
});

describe('AwsQ entry point',function(){
	it('should inject/hack \'then\' into aws.response.prototype',function(){

		expect(AWS.Request.prototype).to.have.property("then");
		expect(AWS.Request.prototype.then).to.be.a('function');
	});
});

describe('Aws.Request.prototype',function(){

	it('should resolve on success',function(done){
		var ec2 = new AWS.EC2({ region: 'us-west-2' });

		var promise = ec2.describeAccountAttributes({})
		.then(function (result) {
			// If we got here, it worked
			expect(result).to.be.ok();
			expect(result.error).to.be(null);
		})
		.catch(function(err){
			throw err;
		})
		.done(function(){
			done();
		});
	});

	it('should reject on failure',function(done){
		var ec2 = new AWS.EC2();

		var failed = false;

		var promise = ec2.describeAccountAttributes({})
		.then(function (result) {
			// Should not get here, expected it to fail
			expect().fail("Resolved when expected rejection");
		})
		.catch(function(err){
			failed = true;
		})
		.done(function(){
			if(!failed)
				expect().fail("Catch was not called");
			done();
		});
	});
});
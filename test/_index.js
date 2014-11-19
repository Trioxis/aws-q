var expect = require("expect.js");
var AwsQ = require("../index.js");
var AWS = require('aws-sdk');

before(function(){
	AwsQ.InjectMagic(AWS);
});

describe('Aws.Request.prototype',function(){

	it('should should provide function for creating promise',function(){
		expect(AWS.Request.prototype).to.have.property("promise");
		expect(AWS.Request.prototype.promise).to.be.a('function');
	});

	it('should support `then` and `fail`',function(){
		expect(AWS.Request.prototype).to.have.keys(['then','fail']);
		expect(AWS.Request.prototype.then).to.be.a('function');
		expect(AWS.Request.prototype.fail).to.be.a('function');
	});

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

	it('should support on failure',function(done){
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
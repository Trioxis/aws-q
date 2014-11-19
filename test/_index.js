var expect = require("expect.js");
var AwsQ = require("../index.js");

var AwsMock;
beforeEach(function(){
	AwsMock = {
		Request:{
			prototype:{

			}
		}
	};
});

describe('AwsQ entry point',function(){
	it('should inject/hack \'then\' into aws.response.prototype',function(){
		AwsQ.InjectMagic(AwsMock);

		expect(AwsMock.Request.prototype).to.have.property("then");
		expect(AwsMock.Request.prototype.then).to.be.a('function');
	});
});

describe('Aws.Request.prototype',function(){

	it('should support q `then`',function(done){
		var AWS = require('aws-sdk');
		AwsQ.InjectMagic(AWS);

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
});
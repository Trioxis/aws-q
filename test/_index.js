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

describe('Aws.Request.prototype.then function',function(){
	it('should return a Q promise',function(){
		var AWS = require('aws-sdk');
		AwsQ.InjectMagic(AWS);

		var ec2 = new AWS.EC2();
		var promise = ec2.describeAccountAttributes({}).then();
		expect(promise).to.be.a('promise');
	});
});
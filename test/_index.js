var expect = require("expect.js");
var AwsQ = require("../index.js");

describe('entry point',function(){
	it('should inject/hack \'then\' into aws.response.prototype',function(){
		var AWSMock = {
			Request:{

			}
		};

		AwsQ(AWSMock);

		expect(AWSMock.Request).to.have.property("then");

	});
});
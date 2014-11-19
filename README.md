# aws-q

Give the AWS SDK some Q magic

Makes AWS Requests act like Q by performing a filthy hack

### Usage

Setup the aws-q like so

    var AWS = 
    require('aws-sdk');
    var awsQ = require('aws-q');
    awsQ(AWS);

Now you can be a boss

    var ec2 = new AWS.EC2({ region: 'us-west-2' });
    ec2.describeAccountAttributes({})
    .then(function (result) {
        console.log('much success');
    })
    .catch(function(err){
        console.log('such failure')
    })
    .done(function(){
        console.log('wow aws-q');
    });

Enough said